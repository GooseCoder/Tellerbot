<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'username' => 'Admin',
            'email' => 'admin@member.com',
            'type' => 'customer',
            'password' => bcrypt('sample')
        ])->accounts()->create([
            'amount' => '1000',
            'type' => 'savings',
            'code' => 'sample0001',
            'currency_code' => 'USD'
        ])->transactions()->create([
            'amount' => '1000',
            'type' => 'DEPOSIT',
            'code' => 'sample0001',
            'currency_code' => 'USD',
            'exchanged_currency_code' => 'USD',
            'exchanged_amount' => '1000'
        ]);
    }
}
