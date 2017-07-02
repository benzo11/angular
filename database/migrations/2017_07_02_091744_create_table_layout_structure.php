<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableLayoutStructure extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('layoutstructure', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fk_sidebar');
            $table->foreign('fk_sidebar')->references('id')->on('sidebar');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('layoutstructure');
    }
}
