<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoldPurchasedPriceColumnsToEmployeeAttachSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employee_attach_sales', function (Blueprint $table) {
            //
            $table->double('purchased_price', 20, 2)->nullable()->default(0);
            $table->double('sold_price', 20, 2)->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employee_attach_sales', function (Blueprint $table) {
            //
            $table->dropColumn(['sold_price','purchased_price']);
        });
    }
}
