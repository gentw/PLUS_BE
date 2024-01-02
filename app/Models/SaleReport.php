<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleReport extends Model
{
    use HasFactory;

    protected $fillable = [
       'sales_euro', 'sales_usd', 'sales_chf',
       'profit_euro', 'profit_usd', 'profit_chf',
       'total_sales_euro', 'total_profit_euro', 'total_expenses_euro',
       'temp_closed'
    ];
}
