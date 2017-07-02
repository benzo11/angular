<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use App\Layout;

class PageController extends Controller
{
    public function getSidebarLinks(){
        return Response::json(Layout::getSidebarLinks(),200);
    }
}
