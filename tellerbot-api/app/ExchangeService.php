<?php

namespace App;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;

class ExchangeService
{
    public function exchange($from, $to, $amount)
    {
        if (Cache::has('exchange'.$from )){
            $statusCode = 200;
            $rates = Cache::get('exchange'.$from );
        } else {
            $client = new Client();
            $res = $client->get(
                config('services.exchange.api'),
                [
                    'query' =>
                        [
                            'base' => $from
                        ]
                ]
            );
            $statusCode = $res->getStatusCode();
            $rates = json_decode($res->getBody()->getContents(), true);
            Cache::put('exchange'.$from, $rates, 120);
        }

        $exchangedAmount = $amount * $rates['rates'][$to];
        return [
            'status_code' => $statusCode,
            'response' => $exchangedAmount
        ];
    }
}
