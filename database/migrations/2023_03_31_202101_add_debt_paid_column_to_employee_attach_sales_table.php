<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDebtPaidColumnToEmployeeAttachSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employee_attach_sales', function (Blueprint $table) {
            $table->integer('debt_paid')->nullable()->defualt(0);
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
            $table->dropColumn('debt_paid');
        });
    }
}
