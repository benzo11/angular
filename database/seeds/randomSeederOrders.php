<?php

use Illuminate\Database\Seeder;

class randomSeederOrders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Order::class, 50)->create();
    }
}