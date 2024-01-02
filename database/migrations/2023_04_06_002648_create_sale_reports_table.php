<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_reports', function (Blueprint $table) {
            $table->id();
            $table->double('sales_euro', 20, 2)->nullable()->default(0);          
            $table->double('sales_usd', 20, 2)->nullable()->default(0); 
            $table->double('sales_chf', 20, 2)->nullable()->default(0); 
            $table->double('profit_euro', 20, 2)->nullable()->default(0);          
            $table->double('profit_usd', 20, 2)->nullable()->default(0); 
            $table->double('profit_chf', 20, 2)->nullable()->default(0);

            $table->double('total_sales_euro', 20, 2)->nullable()->default(0); 
            $table->double('total_profit_euro', 20, 2)->nullable()->default(0);
            $table->double('total_expenses_euro', 20, 2)->nullable()->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sale_reports');
    }
}
