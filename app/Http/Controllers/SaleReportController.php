<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SaleReport;
use App\Models\CompanyFund;
use App\Models\User;

class SaleReportController extends Controller
{
    //
    public function fetchReportsByYearAndMonth(Request $request) {
        
        $year = $request['reportData']['year'];
        $month = $request['reportData']['month'];

        if(isset($year) && isset($month)) {
            $nextMonth = date('m', strtotime("+1 month", mktime(0, 0, 0, $month, 1)));
	    //return $nextMonth;

            $report = SaleReport::whereYear('created_at', $year)->whereMonth('created_at', $nextMonth)->first();
            $companyBalance = CompanyFund::select('current_balance')->whereYear('created_at', $year)->whereMonth('created_at', $nextMonth)->get()->last();
            $employees = User::with(['sales' => function ($query) use ($year, $month) {
                $query->where(function ($q) {
                    $q->where('status', 1)
                        ->orWhere('status', 2);
                        // $q->where('status', 0);
                })->whereYear('created_at', $year)->whereMonth('created_at', $month)
                ->orWhere(function ($q) use ($year, $month) {
                    $q->where('status', 0)->whereYear('created_at', $year)->whereMonth('created_at', '!=', $month)
                    ->whereMonth('updated_at', $month);
                });
                
                
                // ->distinct('emp_id');
            }])->where('role', 2)->orWhere('role', 1)->get();

            $total_sold_euro = 0;
            $total_sold_chf = 0;
            $total_sold_usd = 0;

            $total_profit_euro = 0;
            $total_profit_chf = 0;
            $total_profit_usd = 0;

            foreach($employees as $emp => $value) {
                $value->emp_sales = $value->sales;
                
                foreach($value->sales as $sale) {   
                    if($sale->main_currency == "euro") {
                        if($sale->status == 0) {
                            $total_sold_euro -= $sale->sold_price;
                            $total_profit_euro -= $sale->profit;
                        } else {
                            $total_sold_euro += $sale->sold_price;
                            $total_profit_euro += $sale->profit;
                        }
                    }

                    if($sale->main_currency == "chf") {
                        if($sale->status == 0) {
                            $total_sold_chf -= $sale->sold_price;
                            $total_profit_chf -= $sale->profit;
                        } else {
                            $total_sold_chf += $sale->sold_price;
                            $total_profit_chf += $sale->profit;
                        }
                    }

                    if($sale->main_currency == "usd") {
                        if($sale->status == 0) {
                            $total_sold_usd -= $sale->sold_price;
                            $total_profit_usd -= $sale->profit;
                        } else {
                            $total_sold_usd += $sale->sold_price;
                            $total_profit_usd += $sale->profit;
                        }
                    }
                }

                $value->total_sold_euro = $total_sold_euro;
                $value->total_profit_euro = $total_profit_euro;

                $value->total_sold_chf = $total_sold_chf;
                $value->total_profit_chf = $total_profit_chf;

                $value->total_sold_usd = $total_sold_usd;
                $value->total_profit_usd = $total_profit_usd;

                $total_sold_euro = 0;
                $total_sold_chf = 0;
                $total_sold_usd = 0;

                $total_profit_euro = 0;
                $total_profit_chf = 0;
                $total_profit_usd = 0;
            }
        } else {
            $report = SaleReport::whereYear('created_at', $year)->first();
            $companyBalance = CompanyFund::select('current_balance')->whereYear('created_at', $year)->get()->last();
            $employees = User::with(['emp_sales' => function ($query) use ($year) {
                $query->where(function ($q) {
                    $q->where('employee_attach_sales.status', 1)
                        ->orWhere('employee_attach_sales.status', 2);
                })
                ->whereYear('employee_attach_sales.created_at', $year)
                ->distinct('emp_id');
            }])->where('role', 2)->orWhere('role', 1)->get();
        }
        
        return response()->json([
            "sale_report"     => $report,
            "company_balance" => $companyBalance,
            "employees"       => $employees
        ]);
        
    }
}
