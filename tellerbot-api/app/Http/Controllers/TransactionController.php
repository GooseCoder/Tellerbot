<?php

namespace App\Http\Controllers;

use App\Account;
use App\ExchangeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class AccountController
 * @package App\Http\Controllers
 */
class TransactionController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        try {
            $this->validate($request, [
                'amount' => 'required',
                'type' => 'required',
                'currency_code' => 'required',
                'account_id' => 'required',
                'user_id' => 'required',
                'code' => 'required'
            ]);

            $account = Account::whereHas('user', function (Builder $query) use ($request) {
                $query->where('id', '=', $request->user_id);
            })->get()->first();

            if ($account) {
                $exchangedCurrencyCode = $request->currency_code;
                $exchangedAmount = $request->amount;
                if ($account->currency_code !== $request->currency_code) {
                    $exchangeService = new ExchangeService();
                    $exchangedAmount = $exchangeService->exchange(
                        $request->currency_code,
                        $account->currency_code,
                        $request->amount
                    )['response'];
                }

                if ($request->type === 'WITHDRAW' && $exchangedAmount > $account->amount) {
                    throw new \Exception('You don\'t have the enough amount in your account');
                }

                $account->transactions()->create([
                    'amount' => $exchangedAmount,
                    'type' => $request->type,
                    'code' => $request->code,
                    'currency_code' => $account->currency_code,
                    'exchanged_currency_code' => $exchangedCurrencyCode,
                    'exchanged_amount' => $request->amount
                ]);

                $account->amount = $request->type === 'DEPOSIT' ? $account->amount + $exchangedAmount : $account->amount - $exchangedAmount;
                $account->transactions;
                $account->save();
            }

            return response()->json(['success' => true, 'account' => $account], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'errors' => [$e->getMessage()]], 200);
        }
    }
}
