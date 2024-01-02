<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('sold_price');
            $table->unsignedBigInteger('purchased_price');
            $table->unsignedBigInteger('profit');
            $table->unsignedBigInteger('service_id');
            $table->integer('status'); // 1 = e_shitur, 2 = borxh, 0 => cancelled
        
            $table->string('payment_method')->nullable();
            
            $table->unsignedBigInteger('debt_price')->nullable();
            $table->string('debt_currency')->nullable();
            $table->timestamps();

            $table->foreign("client_id")->references('id')->on('users');
            $table->foreign("service_id")->references('id')->on('services');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
