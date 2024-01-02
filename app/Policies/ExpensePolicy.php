<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ExpensePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->role == 1;
    }

    public function create(User $user)
    {
        return $user->role == 1;
    }

    public function update(User $user, User $model)
    {
        return $user->role == 1;
    }

    public function delete(User $user, User $model)
    {
        return $user->role == 1;
    }



}
