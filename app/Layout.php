<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Layout extends Model
{

    public static function getSidebarLinks(){
        return DB::select('SELECT * FROM sidebar');
    }
}
