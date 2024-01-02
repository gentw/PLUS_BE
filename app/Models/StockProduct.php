<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class StockProduct extends Model
{
    use HasFactory;

    protected $table = "stock_products";
    protected $fillable = [
        'barcode', 'emri', 'njesia', 'sasia', 'cmimi', 'vlera'
    ];

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:i:s');
    }

    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->format('Y-m-d H:i:s');
    }
}
