<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Sale;
use Illuminate\Auth\Access\HandlesAuthorization;

class SalePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function delete(User $user, Sale $sale)
    {
        return $user->role == 1;
    }
}
