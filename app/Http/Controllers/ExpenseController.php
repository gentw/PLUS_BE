<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;
use App\Models\Sale;
use App\Models\SaleReport;
use App\Models\OwnerTransaction;
use App\Models\CompanyFund;
use DB;

class ExpenseController extends Controller
{
    //
       /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addExpense(Request $request)
    {   
        Expense::create([
            "payment_type" => $request['expense']["payment_type"],
            "payment_price" => $request['expense']["payment_price"],
            "user_id"       => auth()->user()->id
        ]);

        return response()->json("success");        

        // return response()->json("success");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function fetchExpense($id)
    {
        //
        $service = Service::where('id', $id)->first();
        return $service;        
    }

    public function fetchExpenses(Request $request)
    {
        if (auth()->user() && auth()->user()->can('viewAny', User::class)) {
            $perPage = $request['perPage'];
            $page = $request['page'];
            $sortBy = $request['sortBy'];
            $sortDesc = $request['sortDesc']; 
            $rangePicker = $request['rangePicker'];
            $startDate = '';
            $endDate = '';

            $q = $request['q'];

            if(strlen($rangePicker)) {

                if (strpos($rangePicker, "to") !== false) {
                    $rangePicker = str_replace(' ', '', $rangePicker);
                    $rangePicker = explode('to', $rangePicker);
                    
                    $startDate =$rangePicker[0];
                    $endDate =$rangePicker[1];
                }            
            }

            if(is_array($rangePicker)) {
                $expenses = Expense::with('user')
                    ->where(function ($query) use ($q) {
                        $query->whereRaw('payment_type like ?', ['%' . $q . '%']);             
                    })
                    ->whereBetween('expenses.created_at', [$startDate, $endDate])          
                    ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                    ->paginate($perPage, ['*'], 'page', $page); 
            } else {
                $expenses = Expense::with('user')
                    ->where(function ($query) use ($q) {
                        $query->whereRaw('payment_type like ?', ['%' . $q . '%']);             
                    })
                    ->where('closed', 0)             
                    ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                    ->paginate($perPage, ['*'], 'page', $page); 
            }

                       
        } else {
            $perPage = $request['perPage'];
            $page = $request['page'];
            $sortBy = $request['sortBy'];
            $sortDesc = $request['sortDesc']; 

            $rangePicker = $request['rangePicker'];
            $startDate = '';
            $endDate = '';

            $q = $request['q'];

            if(strlen($rangePicker)) {

                if (strpos($rangePicker, "to") !== false) {
                    $rangePicker = str_replace(' ', '', $rangePicker);
                    $rangePicker = explode('to', $rangePicker);
                    
                    $startDate =$rangePicker[0];
                    $endDate =$rangePicker[1];
                }            
            }

            if(is_array($rangePicker)) {
                $expenses = Expense::with('user')
                    ->where(function ($query) use ($q) {
                        $query->whereRaw('payment_type like ?', ['%' . $q . '%']);             
                    })
                    ->where('user_id', auth()->user()->id)    
                    ->whereBetween('expenses.created_at', [$startDate, $endDate])         
                    ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                    ->paginate($perPage, ['*'], 'page', $page);  
            } else {
                $expenses = Expense::with('user')
                    ->where(function ($query) use ($q) {
                        $query->whereRaw('payment_type like ?', ['%' . $q . '%']);             
                    })
                    ->where('closed', 0) 
                    ->where('user_id', auth()->user()->id)            
                    ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                    ->paginate($perPage, ['*'], 'page', $page);  
            }
        }

        $total_rows = $expenses->total();
        $expenses = $expenses->items();

        return response()->json([
            "expenses" => $expenses,
            "total" => $total_rows,
        ]);
    }

    public function fetchAllExpenses()
    {
        $expenses = Expense::all()->map(function($expense) {
            return [
                'label' => $expense->name,
                'value' => $expense->id,
            ];
        });

        return $expenses;
    }

    public function deleteExpense($id) {
        $expense = Expense::findOrFail($id);
        $expense->delete();

        return response()->json(['message' => 'Expense deleted successfully']);
    }

    public function fetchCurrentMonthExpensesPriceReport() {
        $prevMonth = date('m', strtotime('previous month'));
        $currentMonth = date('m'); 
        $currentYear = date('Y');
        
        $currentMexpenses = Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('closed', 0)->sum('payment_price');  
        $prevMexpenses = Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('closed', 0)->sum('payment_price');  
        $total_euro = $currentMexpenses + $prevMexpenses;
        return response()->json($total_euro);
    }

    public function closeThisMonth(Request $r) {    
        $currentMonth = date('m'); 
        $prevMonth = date('m', strtotime('previous month')); // previous Month
        $currentYear = date('Y');

       
        $expense_prev_month = Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('closed', 1)->get()->count(); // closed
        $expense_prev_month_not_closed = Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('closed', 0)->get()->count(); //not closed
        $expense_current_month = Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('closed', 1)->get()->count();

    if($expense_prev_month > 0 && $expense_prev_month_not_closed <= 0) {
		$expense = 0;
	} else {
        	$expense = $expense_prev_month + $expense_current_month;
        }
        

        if($expense>=1) {
            return response()->json("Shpenzimet jane mbyllur, prisni deri me daten 1 te muajit ne vijim!");
        } else {
            $expensePrevM = Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('closed', 0);
            $expenseCurrentM = Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('closed', 0)->select('payment_price');

            $expense = $expensePrevM->union($expenseCurrentM);

            $expense_total_euro = $expense->sum('payment_price');
            
            $prev_Month = date('m', strtotime('previous month'));
            $current_Month = date('m'); 
            $current_Year = date('Y');
        
            $current_Mexpenses = Expense::whereYear('created_at', $current_Year)->whereMonth('created_at', $current_Month)->where('closed', 0)->sum('payment_price');  
            $prev_Mexpenses = Expense::whereYear('created_at', $current_Year)->whereMonth('created_at', $prev_Month)->where('closed', 0)->sum('payment_price');  
            $total_euro_expenses = $current_Mexpenses + $prev_Mexpenses;         
      
            Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('closed', 0)->update([
                'closed' => 1,
                'temp_closed' => 1
            ]);

            Expense::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('closed', 0)->update([
                'closed' => 1,
                'temp_closed' => 1
            ]);

            // generate reports
            $total_euro = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('main_currency', 'euro')->where(function ($q) {
                $q->where('status', 1)
                ->orWhere('status', 2); 
            })->sum('sold_price');  
            $total_usd = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('main_currency', 'usd')->where(function ($q) {
                $q->where('status', 1)
                ->orWhere('status', 2); 
            })->sum('sold_price');
            $total_chf = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('main_currency', 'chf')->where(function ($q) {
                $q->where('status', 1)
                ->orWhere('status', 2); 
            })->sum('sold_price');

            $profit_euro = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('main_currency', 'euro')->where(function ($q) {
                $q->where('status', 1)
                ->orWhere('status', 2); 
            })->sum('profit');
            $profit_usd = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('main_currency', 'usd')->where(function ($q) {
                $q->where('status', 1)
                ->orWhere('status', 2); 
            })->sum('profit');
            $profit_chf = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $prevMonth)->where('main_currency', 'chf')->where(function ($q) {
                $q->where('status', 1)
                ->orWhere('status', 2); 
            })->sum('profit');

            $total_euro_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $prevMonth)->whereMonth('created_at', '!=' ,$prevMonth)->where('main_currency', 'euro')->where('status', 0)->sum('sold_price');
            $total_usd_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $prevMonth)->whereMonth('created_at', '!=' ,$prevMonth)->where('main_currency', 'usd')->where('status', 0)->sum('sold_price');
            $total_chf_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $prevMonth)->whereMonth('created_at', '!=' ,$prevMonth)->where('main_currency', 'chf')->where('status', 0)->sum('sold_price');

            $profit_euro_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $prevMonth)->whereMonth('created_at', '!=' ,$prevMonth)->where('main_currency', 'euro')->where('status', 0)->sum('profit');
            $profit_usd_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $prevMonth)->whereMonth('created_at', '!=' ,$prevMonth)->where('main_currency', 'usd')->where('status', 0)->sum('profit');
            $profit_chf_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $prevMonth)->whereMonth('created_at', '!=' ,$prevMonth)->where('main_currency', 'chf')->where('status', 0)->sum('profit');

            $total_sales_euro = $r['expense']['total_sales_euro'];
            $total_profit_euro = $r['expense']['total_profit_euro'];

            SaleReport::create([
                'sales_euro'        => $total_euro - $total_euro_cancelled,
                'sales_usd'         => $total_usd - $total_usd_cancelled,
                'sales_chf'         => $total_chf - $total_chf_cancelled,
                'profit_euro'       => $profit_euro - $profit_euro_cancelled,
                'profit_usd'        => $profit_usd - $profit_usd_cancelled,
                'profit_chf'        => $profit_chf - $profit_chf_cancelled,
                'total_sales_euro'  => $total_sales_euro,
                'total_profit_euro' => $total_profit_euro,
                'total_expenses_euro' => $total_euro_expenses
            ]);

            // generate transaction
            $transaction = OwnerTransaction::create([
                'amount' => $total_profit_euro - $total_euro_expenses,
                'user_id' => auth()->user()->id
            ]);

            // generate funds 
            $current_balance = CompanyFund::latest()->first()->current_balance;
            
            CompanyFund::create([
                'before_balance' => $current_balance,
                'current_balance' => $current_balance + $transaction->amount,
                'transaction_id' => $transaction->id
            ]);
            
            return response()->json("success");
        }

    }
    public function fetchCurrentBilance() {
        if(auth()->user()->role == 1) {
            $current_balance = CompanyFund::latest()->first()->current_balance;
        
            return response()->json($current_balance);   
        }
    }

    public function withdrawMoney(Request $request) {
        $current_balance = CompanyFund::latest()->first()->current_balance;
        if($request['withdraw']['withdraw_amount'] > $current_balance) {
            return response()->json("Nuk keni mjete te mjaftueshme per terheqje!");
        } else {
            $transaction = OwnerTransaction::create([
                'amount' => $request['withdraw']['withdraw_amount'],
                'user_id' => auth()->user()->id,
                'type' => 'terheqje',
                'temp_closed' => 0
            ]);
    
            $current_balance = CompanyFund::latest()->first()->current_balance;
            
            CompanyFund::create([
                'before_balance' => $current_balance,
                'current_balance' => $current_balance - $transaction->amount,
                'temp_closed' => 0,
                'transaction_id' => $transaction->id
            ]);
            return response()->json("success");
        }        
    }

    public function resetCloseMonthExpenses() {
        Expense::where('temp_closed', 1)->where('closed', 1)->update([
            'closed' => 0,
            'temp_closed' => 0
        ]);
        CompanyFund::where('temp_closed', 1)->delete();
        OwnerTransaction::where('temp_closed', 1)->delete();
        SaleReport::where('temp_closed', 1)->delete();

        return response()->json('success');
    }

    public function disableMonthExpenseReset() {
        if (now()->day === 19) {
            CompanyFund::where('temp_closed', 1)->update(['temp_closed' => 0]);
            Expense::where('temp_closed', 1)->update(['temp_closed' => 0]);
            OwnerTransaction::where('temp_closed', 1)->update(['temp_closed' => 0]);
            SaleReport::where('temp_closed', 1)->update(['temp_closed' => 0]);
            
            return 'Month expense reset has been disabled.';
        } else {
            return 'Today is not the 21nd day of the month. No action taken.';
        }
    }

}
