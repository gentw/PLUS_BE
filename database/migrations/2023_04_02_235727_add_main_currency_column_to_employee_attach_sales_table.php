<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMainCurrencyColumnToEmployeeAttachSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employee_attach_sales', function (Blueprint $table) {
            $table->string('main_currency')->nullable()->default('euro');
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
            $table->dropColumn('main_currency');
        });
    }
}
