<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'account';

    protected $fillable = [
        'type', 'amount', 'currency_code', 'code'
    ];

    public function transactions()
    {
        return $this->hasMany('App\AccountTransaction');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
