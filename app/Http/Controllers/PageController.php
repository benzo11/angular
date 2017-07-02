<?php
namespace App\Http\Controllers;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use App\Layout;

class PageController extends Controller
{
    public function getSidebarLinks(){
        return Response::json(Layout::getSidebarLinks(),200);
    }

    public function saveNewLink(){
        return "im in";
    }
}
