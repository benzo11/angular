<?php

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

Route::group(array('prefix' => 'api/v1'), function() {
    Route::resource('orders','OrdersController');

    //just fot test how to get in angular
    Route::get('/sidebarLinks','PageController@getSidebarLinks');
    Route::post('/sidebarLinks','PageController@saveNewLink');
});



