<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StockProduct;

class StockProductController extends Controller
{
    //
    public function store(Request $request)
    {
        StockProduct::create([
            "barcode"   => $request["barcode"],
            "emri"      => $request["emri"],
            "njesia"    => $request["njesia"],
            "sasia"     => $request["sasia"],
            "cmimi"     => $request["cmimi"],
            "vlera"     => $request["sasia"] * $request["cmimi"]
        ]);

        return response()->json("success");   
    }

    public function update(Request $request)
    {
        StockProduct::where('id', $request['stock']['id'])->update([
            "barcode"   => $request['stock']["barcode"],
            "emri"      => $request['stock']["emri"],
            "njesia"    => $request['stock']["njesia"],
            "sasia"     => $request['stock']["sasia"],
            "cmimi"     => $request['stock']["cmimi"],
            "vlera"     => $request['stock']["sasia"] * $request['stock']["cmimi"]
        ]);

        return response()->json("success");   
    }


    public function fetchStockProduct($id)
    {
        $stock = StockProduct::where('id', $id)->first();

        return response()->json($stock);   
    }



    public function fetchTotalOfVleraSum() {
        return StockProduct::sum('vlera');
    }

}
