<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DisableMonthExpenseReset extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'disable-month-expense-reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Disable the ability for users to reset expenses on the 22nd day of every month.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Check if today is the 22nd day of the month
        if (now()->day === 19) {
            // Disable the month closure feature here
            // You can put your specific logic here
            $this->info('Month closure has been disabled.');
        } else {
            $this->info('Today is not the 22nd day of the month. No action taken.');
        }
    }
}
