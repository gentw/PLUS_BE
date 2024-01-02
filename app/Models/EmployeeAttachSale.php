<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

class EmployeeAttachSale extends Model
{
    use HasFactory;

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:i');
    }

    public function sale() {
        return $this->belongsTo(Sale::class, 'sale_id', 'id');
    }


    protected $fillable = [
        'status', 'payment_method', 'debt_price', 'debt_currency', 'debt_price_unpaid', 'emp_id', 'sale_id', 'client_id', 'canceled', 'debt_paid', 'main_currency', 'appointed', 'profit', 'sold_price', 'purchased_price'
    ];

}
