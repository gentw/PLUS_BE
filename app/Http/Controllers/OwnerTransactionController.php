<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\OwnerTransaction;
use App\Models\StockProduct;

class OwnerTransactionController extends Controller
{
    //
    public function fetchTransactions(Request $request)
    {
        $perPage = $request['perPage'];
        $page = $request['page'];
        $sortBy = $request['sortBy'];
        $sortDesc = $request['sortDesc']; 

        $q = $request['q'];
        
        
        $transactions = StockProduct::orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
            ->paginate($perPage, ['*'], 'page', $page);

        $total_rows = $transactions->total();
        $transactions = $transactions->items();

        return response()->json([
            "transactions" => $transactions,
            "total" => $total_rows,
        ]);
    }

    public function deleteTransaction($id) {
        $expense = StockProduct::findOrFail($id);
        $expense->delete();

        return response()->json(['message' => 'U fshi me suksese!']);
    }
}
