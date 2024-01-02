<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Validator;
use Response;


use App\Models\User;
use App\Models\Sale;
use App\Models\Service;
use App\Models\EmployeeAttachSale;
use Illuminate\Support\Facades\Hash;

use Carbon\Carbon;


class SaleController extends Controller
{
    //
    public function addSale(Request $request) {
        if(isset($request['sale']['new_client'])) {
            $validator = Validator::make(
                $request['sale'],
                [
                    'new_client'   => ['required'],
                ],
                [
                    'new_client.required'   => 'Emri klientit eshte obligative!',
                ]
            );

            if ($validator->fails()) {
                return Response::json($validator->messages()->first());
            }
	    $user_id = User::latest('id')->first()->id;
            $created_client = User::create(
                [
                    'name'      => $request['sale']['new_client'],
                    'email'     => "user".++$user_id."@bluesky.travel",
                    'password'  => Hash::make("bluesky4gency123"),
                    'role'      => 3
                ]
            );

            $client_id = $created_client->id;
        } else {
            $validator = Validator::make(
                $request['sale'],
                [
                    'client_id'   => ['required'],
                ],
                [
                    'client_id.required'   => 'Emri klientit eshte obligative!',
                ]
            );

            if ($validator->fails()) {
                return Response::json($validator->messages()->first());
            }

            $client_id = $request['sale']['client_id'];
        }

        $validator = Validator::make(
            $request['sale'],
            [
               
                'service_id'        => ['required'],
                'status'            => ['required'],
                'main_currency'       => ['required'],
            ],
            [
                'service_id.required'       => 'Sherbimi eshte obligative!',
                'status.required'           => 'Statusi eshte obligative!',
                'main_currency'             => 'Valuta eshte obligative!'
            ]
        );

        if ($validator->fails()) {
            return Response::json($validator->messages()->first());
        }

        if($request['sale']['status'] == 1) {

            $sale = Sale::create([
                'client_id'         => $client_id,
                'sold_price'        => $request['sale']['sold_price'],
                'purchased_price'   => $request['sale']['purchased_price'],
                'main_currency'     => $request['sale']['main_currency'],
                'profit'            => $request['sale']['sold_price'] - $request['sale']['purchased_price'],
                'service_id'        => $request['sale']['service_id'],
                'status'            => $request['sale']['status'],
                'payment_method'    => $request['sale']['payment_method'],
                'emp_id'            => auth()->user()->id,
            ]);

            EmployeeAttachSale::create([
                'emp_id'            => auth()->user()->id,
                'sale_id'           => $sale->id,
                'client_id'         => $client_id,
                'sold_price'        => $request['sale']['sold_price'],
                'purchased_price'   => $request['sale']['purchased_price'],
                'main_currency'     => $request['sale']['main_currency'],
                'status'            => $request['sale']['status'],
                'payment_method'    => $request['sale']['payment_method'],
                'profit'            => $request['sale']['sold_price'] - $request['sale']['purchased_price'],
            ]);               
        } 

        if($request['sale']['status'] == 2) {
            if($request['sale']['appointed'] == 1) {
                $sale = Sale::create([
                    'client_id'         => $client_id,
                    'profit'            => $request['sale']['profit'],
                    'main_currency'     => $request['sale']['main_currency'],
                    'service_id'        => $request['sale']['service_id'],
                    'status'            => $request['sale']['status'],
                    'debt_price'        => $request['sale']['debt_price'],
                    'debt_currency'     => $request['sale']['debt_currency'],
                    'debt_price_unpaid' => $request['sale']['debt_price_unpaid'],
                    'appointed'         => $request['sale']['appointed'],
                    'do_pay_debt'       => $request['sale']['do_pay_debt'],
                    'emp_id'            => auth()->user()->id, 
                ]);
    
                EmployeeAttachSale::create([
                    'emp_id'            => auth()->user()->id,
                    'sale_id'           => $sale->id,
                    'client_id'         => $client_id,
                    'status'            => $request['sale']['status'],
                    'main_currency'     => $request['sale']['main_currency'],
                    'debt_price'        => $request['sale']['debt_price'],
                    'debt_currency'     => $request['sale']['debt_currency'],
                    'debt_price_unpaid' => $request['sale']['debt_price_unpaid'],
                    'profit'            => $request['sale']['profit'],
                    'appointed'         => $request['sale']['appointed']
                ]);
            } else {               
                $sale = Sale::create([
                    'client_id'         => $client_id,
                    'sold_price'        => $request['sale']['sold_price'],
                    'purchased_price'   => $request['sale']['purchased_price'],
                    'profit'            => $request['sale']['sold_price'] - $request['sale']['purchased_price'],
                    'main_currency'     => $request['sale']['main_currency'],
                    'service_id'        => $request['sale']['service_id'],
                    'status'            => $request['sale']['status'],
                    'debt_price'        => $request['sale']['debt_price'],
                    'debt_currency'     => $request['sale']['debt_currency'],
                    'debt_price_unpaid' => $request['sale']['debt_price_unpaid'],
                    'appointed'         => $request['sale']['appointed'],
                    'do_pay_debt'       => $request['sale']['do_pay_debt'],
                    'emp_id'            => auth()->user()->id, 
                ]);
    
                EmployeeAttachSale::create([
                    'emp_id'            => auth()->user()->id,
                    'sale_id'           => $sale->id,
                    'client_id'         => $client_id,
                    'status'            => $request['sale']['status'],
                    'main_currency'     => $request['sale']['main_currency'],
                    'debt_price'        => $request['sale']['debt_price'],
                    'debt_currency'     => $request['sale']['debt_currency'],
                    'debt_price_unpaid' => $request['sale']['debt_price_unpaid'],
                    'profit'            => $request['sale']['sold_price'] - $request['sale']['purchased_price'],
                    'sold_price'        => $request['sale']['sold_price'],
                    'purchased_price'   => $request['sale']['purchased_price'],
                    'appointed'         => $request['sale']['appointed']
                ]);
            }
        } 

        
    }

    public function fetchSales(Request $request) {
        $perPage = $request['perPage'];
        $page = $request['page'];
        $sortBy = $request['sortBy'];
        $sortDesc = $request['sortDesc']; 
        $rangePicker = $request['rangePicker'];
        $startDate = '';
        $endDate = '';

        $q = $request['q'];

        $status = $request['status'];

        if(strlen($rangePicker)) {

            if (strpos($rangePicker, "to") !== false) {
                $rangePicker = str_replace(' ', '', $rangePicker);
                $rangePicker = explode('to', $rangePicker);
                
                $startDate =$rangePicker[0];
                $endDate =$rangePicker[1];
            }            
        }

        if(strlen($status)) {
            $sales = Sale::join('users', 'sales.client_id', '=', 'users.id')
                ->join('services', 'sales.service_id', '=', 'services.id')
                ->select('sales.*', 'users.name as client_name', 'services.name as service_name')
                ->where('status', $status)  
                ->where(function ($query) use ($q, $startDate, $endDate) {
                    $query->whereRaw('users.name like ?', ['%' . $q . '%'])
                    ->orWhereRaw('services.name like ?', ['%' . $q . '%']);  
                })                
                ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                ->paginate($perPage, ['*'], 'page', $page);
                
                if(is_array($rangePicker)) {
                    $sales = Sale::join('users', 'sales.client_id', '=', 'users.id')
                        ->join('services', 'sales.service_id', '=', 'services.id')
                        ->select('sales.*', 'users.name as client_name', 'services.name as service_name')
                        ->where('status', $status)  
                        ->where(function ($query) use ($q, $startDate, $endDate) {
                            $query->whereRaw('users.name like ?', ['%' . $q . '%'])
                            ->orWhereRaw('services.name like ?', ['%' . $q . '%']);  
                        })      
                        ->whereBetween('sales.created_at', [$startDate, $endDate])
                        ->orWhere(function ($q) use ($startDate, $endDate) {
                            $q->where('sales.status', 0)->whereNotBetween('sales.created_at', [$startDate, $endDate])->whereBetween('sales.updated_at', [$startDate, $endDate]);
                        })          
                        ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                        ->paginate($perPage, ['*'], 'page', $page);
                }
        } else if(is_array($rangePicker)) {
            $sales = Sale::join('users', 'sales.client_id', '=', 'users.id')
                ->join('services', 'sales.service_id', '=', 'services.id')
                ->select('sales.*', 'users.name as client_name', 'services.name as service_name')            
                ->whereBetween('sales.created_at', [$startDate, $endDate])
                ->where(function ($query) use ($q) {
                    $query->whereRaw('users.name like ?', ['%' . $q . '%'])
                    ->orWhereRaw('services.name like ?', ['%' . $q . '%']);                
                })                
                ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                ->paginate($perPage, ['*'], 'page', $page);  
        } else {
            $sales = Sale::join('users', 'sales.client_id', '=', 'users.id')
                ->join('services', 'sales.service_id', '=', 'services.id')                
                ->select('sales.*', 'users.name as client_name', 'services.name as service_name')   
                ->where(function ($query) use ($q) {
                    $query->whereRaw('users.name like ?', ['%' . $q . '%'])
                    ->orWhereRaw('services.name like ?', ['%' . $q . '%']);                
                }) 
                ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                ->paginate($perPage, ['*'], 'page', $page);  
        }
        
        $total_rows = $sales->total();
        $sales = $sales->items();  
        

        return response()->json([
            "sales" => $sales,
            "total" => $total_rows
        ]);
    }

    public function fetchDebtSale(Request $request) {
        $debtSale = Sale::with(['client', 'service'])->where('id', $request['saleData']['saleId'])->where('client_id', $request['saleData']['clientId'])->where('status', 2)->first();
        
        return response()->json($debtSale);
    }

    public function payDebt(Request $request) {

        if($request['sale']['status'] == 1) {
            $validator = Validator::make(
                $request['sale'],
                [
                    'payment_method'            => ['required'],
                ],
                [
                    'payment_method.required'   => 'Menyra e pageses eshte obligative!',
                ]
            );
    
            if ($validator->fails()) {
                return Response::json($validator->messages()->first());
            }

            $sale = Sale::where('id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])->update([
                'status'            => $request['sale']['status'],
                'payment_method'    => $request['sale']['payment_method'],
                'debt_price_unpaid' => 0,
                'emp_id'            => auth()->user()->id,
            ]);

            EmployeeAttachSale::where('sale_id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])
                ->latest()
                ->first()
                ->update(['debt_paid' => 1]);

            $last_emp_attach_sale = EmployeeAttachSale::where('sale_id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])
                ->latest()
                ->first();

            EmployeeAttachSale::create([
                'emp_id'            => auth()->user()->id,
                'sale_id'           => $request['sale']['sale_id'],
                'client_id'         => $request['sale']['client_id'],
                'status'            => $request['sale']['status'],
                'payment_method'    => $request['sale']['payment_method'],
                'debt_price'        => $last_emp_attach_sale->debt_price_unpaid,
                'debt_price_unpaid' => 0,
                'debt_currency'     => $last_emp_attach_sale->debt_currency,
                'debt_paid'         => 1
            ]);
        } 

        if($request['sale']['status'] == 2) {
            if($request['sale']['debt_price_unpaid'] == 0 || $request['sale']['debt_price_unpaid'] == "0") {
                $sale = Sale::where('id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])->update([
                    'status'            => 1,
                    'payment_method'    => 'cash',
                    'debt_price_unpaid' => 0,
                    'emp_id'            => auth()->user()->id,
                ]);

                EmployeeAttachSale::where('sale_id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])
                ->latest()
                ->first()
                ->update(['debt_paid' => 1]);

                $last_emp_attach_sale = EmployeeAttachSale::where('sale_id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])
                ->latest()
                ->first();
    
                EmployeeAttachSale::create([
                    'emp_id'            => auth()->user()->id,
                    'sale_id'           => $request['sale']['sale_id'],
                    'client_id'         => $request['sale']['client_id'],
                    'status'            => 1,
                    'payment_method'    => 'cash',
                    'debt_price'        => $last_emp_attach_sale->debt_price_unpaid,
                    'debt_price_unpaid' => 0,
                    'debt_currency'     => $request['sale']['debt_currency'],
                    'debt_paid'         => 1
                ]);
            } else {
                $sale = Sale::where('id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])->update([
                    'client_id'         => $request['sale']['client_id'],
                    'status'            => $request['sale']['status'],
                    'debt_price'        => $request['sale']['debt_price'],
                    'debt_currency'     => $request['sale']['debt_currency'],
                    'debt_price_unpaid' => $request['sale']['debt_price_unpaid'],
                    'emp_id'            => auth()->user()->id, 
                ]);

                EmployeeAttachSale::where('sale_id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])
                ->latest()
                ->first()
                ->update(['debt_paid' => 1]);

                EmployeeAttachSale::create([
                    'emp_id'            => auth()->user()->id,
                    'sale_id'           => $request['sale']['sale_id'],
                    'client_id'         => $request['sale']['client_id'],
                    'status'            => $request['sale']['status'],
                    'debt_price'        => $request['sale']['debt_price'],
                    'debt_currency'     => $request['sale']['debt_currency'],
                    'debt_price_unpaid' => $request['sale']['debt_price_unpaid']
                ]);
            }
        } 

        $sale_appointed = Sale::where('id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])->where('appointed', 1)->latest()->first();

        if($sale_appointed) {
            Sale::where('id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])->where('appointed', 1)->update(
                [
                    'sold_price'      => $sale_appointed->profit
                ]
                );
        }
    }

    public function cancelSale(Request $request) {
      
        $sale = Sale::where('id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])->update([
            'status' => 0,
        ]);

        EmployeeAttachSale::create([
            'sale_id'           => $request['sale']['sale_id'],
            'client_id'         => $request['sale']['client_id'],
            'emp_id'            => auth()->user()->id,
            'status'            => 0,
        ]);

        EmployeeAttachSale::where('sale_id', $request['sale']['sale_id'])->where('client_id', $request['sale']['client_id'])->update([
            'canceled'            => 1,
        ]);
    }

    public function fetchSalesReport(Request $request) {
              
        $rangePicker = $request['sale']['rangePicker'];
        $startDate = '';
        $endDate = '';

        $status = $request['sale']['status'];

        

        if(strlen($rangePicker)) {

            if (strpos($rangePicker, "to") !== false) {
                $rangePicker = str_replace(' ', '', $rangePicker);
                $rangePicker = explode('to', $rangePicker);
                
                $startDate =$rangePicker[0];
                $endDate =$rangePicker[1];
            }            
        }       

        if($status == 1) {
            if(strlen($status)) {                
                if(is_array($rangePicker)) {
                  
                    $sales_no = Sale::whereBetween('created_at', [$startDate, $endDate])
                    ->where(function ($q) {
                        $q->where('status', 1)
                        ->orWhere('status', 2); 
                    })->count();

                    $profit_euro = Sale::whereBetween('created_at', [$startDate, $endDate])->where('main_currency', 'euro')->where(function ($q) {
                        $q->where('status', 1)
                        ->orWhere('status', 2); 
                    })->sum('profit');
                    $profit_usd = Sale::whereBetween('created_at', [$startDate, $endDate])->where('main_currency', 'usd')->where(function ($q) {
                        $q->where('status', 1)
                        ->orWhere('status', 2); 
                    })->sum('profit');
                    $profit_chf = Sale::whereBetween('created_at', [$startDate, $endDate])->where('main_currency', 'chf')->where(function ($q) {
                        $q->where('status', 1)
                        ->orWhere('status', 2); 
                    })->sum('profit');


                    $total_euro = Sale::whereBetween('created_at', [$startDate, $endDate])->where('main_currency', 'euro')->where(function ($q) {
                        $q->where('status', 1)
                        ->orWhere('status', 2); 
                    })->sum('sold_price');  
                    $total_usd = Sale::whereBetween('created_at', [$startDate, $endDate])->where('main_currency', 'usd')->where(function ($q) {
                        $q->where('status', 1)
                        ->orWhere('status', 2); 
                    })->sum('sold_price');
                    $total_chf = Sale::whereBetween('created_at', [$startDate, $endDate])->where('main_currency', 'chf')->where(function ($q) {
                        $q->where('status', 1)
                        ->orWhere('status', 2); 
                    })->sum('sold_price');

                    $total_euro_cancelled = Sale::whereBetween('updated_at', [$startDate, $endDate])->whereNotBetween('created_at', [$startDate, $endDate])->where('main_currency', 'euro')->where('status', 0)->sum('sold_price');
                    $total_usd_cancelled = Sale::whereBetween('updated_at', [$startDate, $endDate])->whereNotBetween('created_at', [$startDate, $endDate])->where('main_currency', 'usd')->where('status', 0)->sum('sold_price');
                    $total_chf_cancelled = Sale::whereBetween('updated_at', [$startDate, $endDate])->whereNotBetween('created_at', [$startDate, $endDate])->where('main_currency', 'chf')->where('status', 0)->sum('sold_price');

                    $profit_euro_cancelled = Sale::whereBetween('updated_at', [$startDate, $endDate])->whereNotBetween('created_at', [$startDate, $endDate])->where('main_currency', 'euro')->where('status', 0)->sum('profit');
                    $profit_usd_cancelled = Sale::whereBetween('updated_at', [$startDate, $endDate])->whereNotBetween('created_at', [$startDate, $endDate])->where('main_currency', 'usd')->where('status', 0)->sum('profit');
                    $profit_chf_cancelled = Sale::whereBetween('updated_at', [$startDate, $endDate])->whereNotBetween('created_at', [$startDate, $endDate])->where('main_currency', 'chf')->where('status', 0)->sum('profit');

                    
                    
                    $sales_cash = Sale::whereBetween('created_at', [$startDate, $endDate])->where('status', 1)->orWhere('status', 2)->where('payment_method', "cash")->count();

                    $sales_bank = Sale::whereBetween('created_at', [$startDate, $endDate])->where('status', 1)->orWhere('status', 2)->where('payment_method', "bank")->count();
                }
            } 
            return response()->json([
                "sales_count" => $sales_no,
                "profit_euro" => $profit_euro - $profit_euro_cancelled,
                "profit_usd" => $profit_usd - $profit_usd_cancelled,
                "profit_chf" => $profit_chf - $profit_chf_cancelled,
                "total_sales_euro" => $total_euro - $total_euro_cancelled,
                "total_sales_usd" => $total_usd - $total_usd_cancelled,
                "total_sales_chf" => $total_chf - $total_chf_cancelled,
                "sales_cash" => $sales_cash,
                "sales_bank" => $sales_bank
            ]);
        } 

        if($status == 2) {
            if(strlen($status)) {                
                if(is_array($rangePicker)) {
                    $debt_count = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                        $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 0);
                    }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    ->pluck('employeeSales')
                    ->flatten()->count();

                    $debt_unpaid_euro = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                        $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 0)->where('debt_currency', 'euro');
                    }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    ->pluck('employeeSales')
                    ->flatten()->sum('debt_price_unpaid');

                    $debt_unpaid_chf = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                        $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 0)->where('debt_currency', 'chf');
                    }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    ->pluck('employeeSales')
                    ->flatten()->sum('debt_price_unpaid');

                    $debt_unpaid_usd = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                        $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 0)->where('debt_currency', 'usd');
                    }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    ->pluck('employeeSales')
                    ->flatten()->sum('debt_price_unpaid');

                    // $debt_paid_eur = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                    //     $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 1)->where('debt_currency', "euro");
                    // }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    // ->pluck('employeeSales')
                    // ->flatten()->sum('debt_price_unpaid');
                    
                    // $debt_paid_chf = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                    //     $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 1)->where('debt_currency', "chf");
                    // }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    // ->pluck('employeeSales')
                    // ->flatten()->sum('debt_price_unpaid');

                    // $debt_paid_usd = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                    //     $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 1)->where('debt_currency', "usd");
                    // }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    // ->pluck('employeeSales')
                    // ->flatten()->sum('debt_price_unpaid');

                    // $sales = Sale::has('employeeSales')->with(['employeeSales' => function($query) {
                    //     $query->where('status', 2)->where('canceled', 0)->where('debt_paid', 0);
                    // }])->whereBetween('created_at', [$startDate, $endDate])->where('status', $status)->get()
                    // ->pluck('employeeSales')
                    // ->flatten();

                    
                    // $sales->each(function($sale) {
                    //     $sale->setRelation('employeeSales', $sale->employeeSales);
                    // });
                    
                    // return response()->json($sales);                    

                }
            } 
            return response()->json([
                    "debt_count"    => $debt_count,
                    "debt_unpaid_eur" => $debt_unpaid_euro,
                    "debt_unpaid_chf" => $debt_unpaid_chf,
                    "debt_unpaid_usd" => $debt_unpaid_usd
            ]);
        } 


    }

    public function deleteSale($id) {
        $sale = Sale::findOrFail($id);

        $this->authorize('delete', $sale);
        $sale->delete();

        return response()->json(['message' => 'Sale deleted successfully']);
    }

    public function fetchSalesByUser(Request $request) {
        $perPage = $request['perPage'];
        $page = $request['page'];
        $sortBy = $request['sortBy'];
        $sortDesc = $request['sortDesc']; 
        $rangePicker = $request['rangePicker'];
        $startDate = '';
        $endDate = '';
        $userId = $request['user_id'];

        $q = $request['q'];

        $status = $request['status']; 

        $user_role = User::where('id', $userId)->first()->role;

        if($user_role == 3) {
            $sales = User::join('employee_attach_sales', 'users.id', '=', 'employee_attach_sales.client_id')
                ->join('users as emp', 'employee_attach_sales.emp_id', '=', 'emp.id')
                ->join('sales', 'employee_attach_sales.sale_id', '=', 'sales.id')
                ->join('services', 'sales.service_id', '=', 'services.id')
                ->where('users.id', $userId)
                ->select('employee_attach_sales.*', 'sales.service_id', 'users.name') // Replace with actual columns you want to select
                ->where(function ($query) use ($q) {
                    $query->whereRaw('emp.name like ?', ['%' . $q . '%'])
                    ->orWhereRaw('services.name like ?', ['%' . $q . '%']);                
                }) 
        
                ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                ->paginate($perPage, ['*'], 'page', $page);

            foreach ($sales as $row) {
                $row->emp = User::where('id', $row->emp_id)->get()->toArray();
                $row->service = Service::where('id', $row->service_id)->get()->toArray();
                $row->sale = Sale::where('id', $row->sale_id)->get()->toArray();
            }
        } else {
            $sales = User::join('employee_attach_sales', 'users.id', '=', 'employee_attach_sales.emp_id')
                ->join('users as client', 'employee_attach_sales.client_id', '=', 'client.id')
                ->join('sales', 'employee_attach_sales.sale_id', '=', 'sales.id')
                ->join('services', 'sales.service_id', '=', 'services.id')
                ->where('users.id', $userId)
                ->select('employee_attach_sales.*', 'sales.service_id', 'client.name') // Replace with actual columns you want to select
                ->where(function ($query) use ($q) {
                    $query->whereRaw('client.name like ?', ['%' . $q . '%'])
                    ->orWhereRaw('services.name like ?', ['%' . $q . '%']);                
                }) 
        
                ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                ->paginate($perPage, ['*'], 'page', $page);

            foreach ($sales as $row) {
                $row->service = Service::where('id', $row->service_id)->get()->toArray();
                $row->sale = Sale::where('id', $row->sale_id)->get()->toArray();
            }
        }        

        

        return response()->json([
            "sales" => $sales->items(),
            "total" => $sales->total(),
            "role"  => $user_role
        ]);
    }

    public function fetchCurrentMonthSalesReport() {
        $currentMonth = date('m', strtotime('previous month')); // previous Month
        // $currentMonth = date('m'); 
        $currentYear = date('Y');
        
        $total_euro = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('main_currency', 'euro')->where(function ($q) {
            $q->where('status', 1)
            ->orWhere('status', 2); 
        })->sum('sold_price');  

        $total_usd = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('main_currency', 'usd')->where(function ($q) {
            $q->where('status', 1)
            ->orWhere('status', 2); 
        })->sum('sold_price');

        $total_chf = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('main_currency', 'chf')->where(function ($q) {
            $q->where('status', 1)
            ->orWhere('status', 2); 
        })->sum('sold_price');

        $profit_euro = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('main_currency', 'euro')->where(function ($q) {
            $q->where('status', 1)
            ->orWhere('status', 2); 
        })->sum('profit');

        $profit_usd = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('main_currency', 'usd')->where(function ($q) {
            $q->where('status', 1)
            ->orWhere('status', 2); 
        })->sum('profit');

        $profit_chf = Sale::whereYear('created_at', $currentYear)->whereMonth('created_at', $currentMonth)->where('main_currency', 'chf')->where(function ($q) {
            $q->where('status', 1)
            ->orWhere('status', 2); 
        })->sum('profit');

        $total_euro_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $currentMonth)->whereMonth('created_at', '!=' ,$currentMonth)->where('main_currency', 'euro')->where('status', 0)->sum('sold_price');
        $total_usd_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $currentMonth)->whereMonth('created_at', '!=' ,$currentMonth)->where('main_currency', 'usd')->where('status', 0)->sum('sold_price');
        $total_chf_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $currentMonth)->whereMonth('created_at', '!=' ,$currentMonth)->where('main_currency', 'chf')->where('status', 0)->sum('sold_price');

        $profit_euro_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $currentMonth)->whereMonth('created_at', '!=' ,$currentMonth)->where('main_currency', 'euro')->where('status', 0)->sum('profit');
        $profit_usd_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $currentMonth)->whereMonth('created_at', '!=' ,$currentMonth)->where('main_currency', 'usd')->where('status', 0)->sum('profit');
        $profit_chf_cancelled = Sale::whereYear('updated_at', $currentYear)->whereMonth('updated_at', $currentMonth)->whereMonth('created_at', '!=' ,$currentMonth)->where('main_currency', 'chf')->where('status', 0)->sum('profit');

        return response()->json([
            "total_sales_euro" => $total_euro - $total_euro_cancelled,
            "total_sales_usd" => $total_usd - $total_usd_cancelled,
            "total_sales_chf" => $total_chf - $total_chf_cancelled,
            "total_profit_euro" => $profit_euro - $profit_euro_cancelled,
            "total_profit_usd" => $profit_usd - $profit_usd_cancelled,
            "total_profit_chf" => $profit_chf - $profit_chf_cancelled
        ]);
    }
}
