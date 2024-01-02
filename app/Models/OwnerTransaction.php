<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class OwnerTransaction extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'amount', 'type', 'user_id', 'temp_closed'
     ];

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:m:s');
    }

    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->format('d-m-Y H:m:s');
    }

    public function company_funds()
    {
        return $this->hasOne(CompanyFund::class, 'transaction_id', 'id'); // User is the parent model
    }
}
