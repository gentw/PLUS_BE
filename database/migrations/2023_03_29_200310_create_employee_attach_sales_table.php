<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeAttachSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_attach_sales', function (Blueprint $table) {
            $table->id();
            $table->integer('status');
            $table->string('payment_method')->nullable();            
            $table->unsignedBigInteger('debt_price')->nullable();
            $table->string('debt_currency')->nullable();
            $table->string('debt_price_unpaid')->nullable();
            $table->unsignedBigInteger('emp_id');
            $table->unsignedBigInteger('sale_id');
            $table->unsignedBigInteger('client_id');            

            $table->timestamps();

            $table->foreign('emp_id')
                  ->references('id')->on('users')
                  ->onDelete('cascade');

            $table->foreign('sale_id')
                  ->references('id')->on('sales')
                  ->onDelete('cascade');

            $table->foreign('client_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_attach_sales');
    }
}
