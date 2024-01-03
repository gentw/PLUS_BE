<?php

use Illuminate\Support\Facades\Route;
use App\Models\Sale;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware(['web'])->group(function () {
    Route::post('/api/addStockProduct', [App\Http\Controllers\StockProductController::class, 'store']);
    Route::post('/api/updateStockProduct/', [App\Http\Controllers\StockProductController::class, 'update']);
    Route::get('/api/fetchTotalOfVleraSum', [App\Http\Controllers\StockProductController::class, 'fetchTotalOfVleraSum']);
    Route::get('/api/fetchStockProduct/{id}', [App\Http\Controllers\StockProductController::class, 'fetchStockProduct']);
    
});

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/web/{any}', function () {
    return view('app');
})->where('any', '.*')->middleware('auth');

Route::get('/sale_invoice/{sale_id}/{client_id}', function($sale_id, $client_id) {
    $sale = Sale::with(['client', 'service'])->where('id', $sale_id)->where('client_id', $client_id)->first();
  
    return view('invoice', compact('sale'));
})->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::get('/api/fetchUsers', [App\Http\Controllers\UserController::class, 'fetchUsers']);
    Route::post('/api/addUser', [App\Http\Controllers\UserController::class, 'addUser']);
    Route::get('/api/fetchUser/{id}', [App\Http\Controllers\UserController::class, 'fetchUser']);
    Route::post('/api/findUserByName', [App\Http\Controllers\UserController::class, 'findUserByName']);
    Route::get('/api/deleteUser/{id}', [App\Http\Controllers\UserController::class, 'deleteUser']);
        
    Route::post('/api/addService', [App\Http\Controllers\ServiceController::class, 'addService']);
    Route::get('/api/fetchServices', [App\Http\Controllers\ServiceController::class, 'fetchServices']);
    Route::get('/api/fetchService/{id}', [App\Http\Controllers\ServiceController::class, 'fetchService']);
    Route::get('/api/fetchAllServices', [App\Http\Controllers\ServiceController::class, 'fetchAllServices']);

    #sales
    Route::get('/api/fetchSales', [App\Http\Controllers\SaleController::class, 'fetchSales']);
    Route::post('/api/addSale', [App\Http\Controllers\SaleController::class, 'addSale']);
    Route::post('/api/payDebt', [App\Http\Controllers\SaleController::class, 'payDebt']);
    Route::post('/api/cancelSale', [App\Http\Controllers\SaleController::class, 'cancelSale']);
    Route::post('/api/fetchSalesReport', [App\Http\Controllers\SaleController::class, 'fetchSalesReport']);
    Route::post('/api/fetchDebtSale', [App\Http\Controllers\SaleController::class, 'fetchDebtSale']);
    Route::get('/api/deleteSale/{id}', [App\Http\Controllers\SaleController::class, 'deleteSale']);    
    Route::get('/api/fetchCurrentMonthSalesReport', [App\Http\Controllers\SaleController::class, 'fetchCurrentMonthSalesReport']);
    
    Route::post('/api/fetchSalesByUser/{id}', [App\Http\Controllers\SaleController::class, 'fetchSalesByUser']);


    Route::post('/api/userIsAdmin', [App\Http\Controllers\UserController::class, 'adminViewAny']);
    
    #expenses
    Route::post('/api/addExpense', [App\Http\Controllers\ExpenseController::class, 'addExpense']);
    Route::get('/api/fetchExpenses', [App\Http\Controllers\ExpenseController::class, 'fetchExpenses']);
    Route::get('/api/fetchExpense/{id}', [App\Http\Controllers\ExpenseController::class, 'fetchExpense']);
    Route::get('/api/fetchAllExpenses', [App\Http\Controllers\ExpenseController::class, 'fetchAllExpenses']);
    Route::get('/api/deleteExpense/{id}', [App\Http\Controllers\ExpenseController::class, 'deleteExpense']); 
    
    Route::get('/api/deleteTransaction/{id}', [App\Http\Controllers\OwnerTransactionController::class, 'deleteTransaction']); 
    
    Route::get('/api/fetchCurrentMonthExpensesPriceReport', [App\Http\Controllers\ExpenseController::class, 'fetchCurrentMonthExpensesPriceReport']);
    Route::post('/api/closeThisMonth', [App\Http\Controllers\ExpenseController::class, 'closeThisMonth']);
    Route::get('/api/fetchCurrentBilance', [App\Http\Controllers\ExpenseController::class, 'fetchCurrentBilance']);
    Route::post('/api/withdrawMoney', [App\Http\Controllers\ExpenseController::class, 'withdrawMoney']);

    Route::get('/api/resetCloseMonthExpenses', [App\Http\Controllers\ExpenseController::class, 'resetCloseMonthExpenses']);
    Route::get('/api/disableMonthExpenseReset', [App\Http\Controllers\ExpenseController::class, 'disableMonthExpenseReset']);

    #transactions
    Route::get('/api/fetchTransactions', [App\Http\Controllers\OwnerTransactionController::class, 'fetchTransactions']);

    Route::post('/api/fetchReportsByYearAndMonth', [App\Http\Controllers\SaleReportController::class, 'fetchReportsByYearAndMonth']);
});


