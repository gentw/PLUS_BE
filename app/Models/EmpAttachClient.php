<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmpAttachClient extends Model
{
    use HasFactory;

    protected $fillable = [
        'emp_id',
        'sale_id',
        'client_id'
    ];
}
