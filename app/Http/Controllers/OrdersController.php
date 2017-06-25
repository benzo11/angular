<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Order;
use DB;
use App\Joke;
use App\User;
use Input;

class OrdersController extends Controller
{
    public function __construct(){
     //   $this->middleware('auth.basic');
    }
    public function index(){
        return Response::json(Order::all(),200);
    }

    public  function  store(){
        return "in post";
    }

}
