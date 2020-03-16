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

Route::post('register', 'PassportController@register');
Route::post('login', 'PassportController@login');
Route::post('chat', 'ChatController@processMessage');
Route::get('exchange', 'ExchangeController@exchange');

Route::middleware('auth:api')->group(function () {
    Route::get('user', 'PassportController@details');
    Route::get('account/{id}', 'AccountController@getDetails');
    Route::post('transaction', 'TransactionController@create');

    Route::resource('products', 'ProductController');
});
