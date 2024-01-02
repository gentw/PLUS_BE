<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTransactionIdColumnToCompanyFundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('company_funds', function (Blueprint $table) {
            //
            $table->unsignedBigInteger('transaction_id')->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('company_funds', function (Blueprint $table) {
            //
            $table->dropColumn('transaction_id');
        });
    }
}
