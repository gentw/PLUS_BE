<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Sale extends Model
{
    use HasFactory;
    protected $fillable = [
        'client_id',
        'sold_price',
        'purchased_price',
        'profit',
        'service_id',
        'status',
        'payment_method',
        'debt_price',
        'debt_currency',
        'debt_price_unpaid',
        'emp_id',
        'main_currency',
        'created_at',
        'appointed',
        'do_pay_debt'
    ];

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:i:s');
    }

    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->format('Y-m-d H:i:s');
    }


    public function client() {
        return $this->belongsTo(User::class, 'client_id', 'id');
    }

    public function service() {
        return $this->belongsTo(Service::class, 'service_id', 'id');
    }

    public function employees() {
        return $this->belongsToMany(User::class, 'employee_attach_sales', 'emp_id', 'sale_id');
    }

    public function clients() {
        return $this->belongsToMany(User::class, 'employee_attach_sales', 'client_id', 'sale_id');
    }

    public function employeeSales()
    {
        return $this->hasMany(EmployeeAttachSale::class, 'sale_id');
    }
}
