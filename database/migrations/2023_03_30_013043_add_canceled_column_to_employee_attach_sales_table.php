<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCanceledColumnToEmployeeAttachSalesTable extends Migration
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
            $table->integer('canceled')->nullable()->default(0);
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
            $table->dropColumn('canceled');
        });
    }
}
