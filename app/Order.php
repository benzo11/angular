<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    public $timestamps = false;

    public  function addOrder($input){
        /*$order = new Order;
        $order->description = $input;
        order->save();*/
    }

    public static function getOrders(){
        return Order::all();
    }

}
