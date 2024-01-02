<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyFund extends Model
{
    use HasFactory;
    protected $fillable = [
        'current_balance', 'before_balance', 'transaction_id', 'temp_closed'
    ];
}
