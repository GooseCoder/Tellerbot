<?php

namespace App\Http\Controllers;

use App\Account;
use App\ExchangeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\Builder;


/**
 * Class AccountController
 * @package App\Http\Controllers
 */
class ExchangeController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function exchange(Request $request)
    {
        try {
            $exchangeController = new ExchangeService();
            $result = $exchangeController->exchange($request->from, $request->to, $request->amount);
            if ($result['status_code'] === 200) {
                return ['amount' => $result['response']];
            } else {
                throw new \Exception('It\'s not possible to make the conversion.');
            }
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'errors' => [$e->getMessage()]], 200);
        }
    }

}
