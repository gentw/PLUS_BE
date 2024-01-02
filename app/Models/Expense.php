<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Expense;
use Carbon\Carbon;

class Expense extends Model
{
    protected $fillable = [
        'payment_type',
        'payment_price',
        'user_id',
        'closed',
        'temp_closed'
    ];

    use HasFactory;

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:m:s');
    }

    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->format('d-m-Y H:m:s');
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
