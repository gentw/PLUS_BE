<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('auth:api')->get('/user/token', function () {
   
//     $user = Auth::user();
//     $token = $user->createToken('My Token')->accessToken;

//     return response()->json([
//         'access_token' => $token,
//     ]);
// });

// Route::post('/loginApi', [App\Http\Controllers\UserController::class, 'loginApi']);

// Route::middleware('auth:api')->group(function () {

//     Route::get('/fetchUsers', [App\Http\Controllers\UserController::class, 'fetchUsers']);
//     Route::post('/addUser', [App\Http\Controllers\UserController::class, 'addUser']);
//     Route::get('/fetchUser/{id}', [App\Http\Controllers\UserController::class, 'fetchUser']);
//     Route::post('/findUserByName', [App\Http\Controllers\UserController::class, 'findUserByName']);

//     Route::post('/addService', [App\Http\Controllers\ServiceController::class, 'addService']);
//     Route::get('/fetchServices', [App\Http\Controllers\ServiceController::class, 'fetchServices']);
//     Route::get('/fetchService/{id}', [App\Http\Controllers\ServiceController::class, 'fetchService']);
//     Route::get('/fetchAllServices', [App\Http\Controllers\ServiceController::class, 'fetchAllServices']);

//     #sales
//     Route::get('/fetchSales', [App\Http\Controllers\SaleController::class, 'fetchSales']);
//     Route::post('/addSale', [App\Http\Controllers\SaleController::class, 'addSale']);
// });
