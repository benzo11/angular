<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Order;
use DB;

class OrdersController extends Controller
{
    public function index(){
        return Response::json(Order::all(),200);
    }

    public  function  store(){
        return "in post";
    }

}
