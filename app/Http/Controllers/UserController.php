<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Validator;
use Response;

use App\Models\User;
use App\Models\EmpAttachClient;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Auth;


class UserController extends Controller
{
    //

    public function __construct() {
        $this->middleware('auth')->except('logout');
    }

    public function loginApi(Request $request) {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('My Token')->accessToken;
            return response()->json([
                'access_token' => $token
            ]);
        } else {
            return response()->json([
                'error' => 'Invalid credentials'
            ], 401);
        }
    }

    public function addUser(Request $request) {  
        
        if($request['user']['role'] == 3 || (auth()->user() && !auth()->user()->can('create', User::class))) {
            $validator = Validator::make(
                $request['user'],
                [
                    'name'   => ['required'],
                ],
                [
                    'name.required'   => 'Name is required!',
                ]
            );
    
            if ($validator->fails()) {
                return Response::json($validator->messages()->first());
            }
    
            $user = User::create(
                [
                    'name'      => $request['user']['name'],
                    'email'     => "user".++User::latest()->first()->id."@bluesky.travel",
                    'password'  => Hash::make("bluesky4gency123"),
                    'role'      => 3
                ]
            );

            EmpAttachClient::create([
                'emp_id'     => auth()->user()->id,
                'client_id'  => $user->id
            ]);

        } else {

            $validator = Validator::make(
                $request['user'],
                [
                    'name'   => ['required'],
                    'email'  => ['required'],
                    'role'   => ['required'],
                ],
                [
                    'name.required'   => 'Name is required!',
                    'email.required'  => 'Email is required!',
                    'role.required'   => 'Role is required!',
                ]
            );
    
            if ($validator->fails()) {
                return Response::json($validator->messages()->first());
            }
    
            User::create(
                [
                    'name'      => $request['user']['name'],
                    'email'     => $request['user']['email'],
                    'password'  => Hash::make($request['user']['password']),
                    'role'      => $request['user']['role']
                ]
            );
        }        

        return response()->json("User was created successfully!");
    }

    public function fetchUser($id) {
        $user = User::where('id', $id)->first();
        return $user;
    }

    public function findUserByName(Request $request){
        $users_to_find = User::select(['id', 'name'])->where('role', 3)->where('name','LIKE', '%'. $request['user'].'%')->get() ->map(function($user) {
            return [
                'label' => $user->name,
                'value' => $user->id,
            ];
        });;
       
        return $users_to_find;
    }

    public function fetchUsers(Request $request) {
      
        // return auth()->user()->can('viewAny', User::class);
        
        $perPage = $request['perPage'];
        $page = $request['page'];
        $sortBy = $request['sortBy'];
        $sortDesc = $request['sortDesc']; 

        $q = $request['q'];

        $role = $request['role'];

        
        if(strlen($role) || strlen($q)) {            
            if(strlen($q) && strlen($role)) {
                $users = User::where('name','LIKE', '%'. $q.'%')->orWhere('email', 'LIKE', '%'.$q.'%')->get();

                $users = $users->filter(function ($user) use ($role) {
                    return $user->role == $role;
                });
            } else if(!strlen($q) && strlen($role)) {
                $users = User::where('role', $role)->get();
            } else {
                $users = User::where('name','LIKE', '%'. $q.'%')->orWhere('email', 'LIKE', '%'.$q.'%')->get();
            }

            $total_rows = $users->count();
            
        } else {            

            if (auth()->user() && auth()->user()->can('viewAny', User::class)) {
                $users = DB::table('users')
                ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                ->paginate($perPage, ['*'], 'page', $page);
            } else {
                $users = DB::table('users')
                ->where('role', 3)
                ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
                ->paginate($perPage, ['*'], 'page', $page);
            }

            $total_rows = $users->total();
            $users = $users->items();

            
        }
        /*
        $users = DB::table('users')
            ->when(auth()->user()->can('viewAny', User::class), function ($query) {
                return $query->get();
            }, function ($query) {
                return $query->where('id', auth()->id())->get();
            });


        */

        return response()->json([
            "users" => $users,
            "total" => $total_rows
        ]);
        
       
    }

    public function adminViewAny(){
        return response()->json(auth()->user()->can('viewAny', User::class));
    }


    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        $this->authorize('delete', $user);
        $user->delete();
        return response()->json(['message' => 'Perdoruesi u fshi me sukses!']);
    }

    
}
