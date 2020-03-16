<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccountTransaction extends Model
{
    protected $table = 'account_transactions';

    protected $fillable = [
        'code', 'type', 'amount', 'currency_code', 'exchanged_currency_code', 'exchanged_amount'
    ];

    public function account()
    {
        return $this->belongsTo('App\Account');
    }
}
