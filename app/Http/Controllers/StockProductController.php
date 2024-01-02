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

}
