<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


/**
 * Class AccountController
 * @package App\Http\Controllers
 */
class AccountController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getDetails(Request $request, $id)
    {
        try {
            $account = Account::find($id);
            if ($account) {
                $account->transactions;
                return response()->json(['success' => true, 'account' => $account], 200);
            } else {
                return response()->json(['success' => false, 'errors' => ['No account found.']], 200);
            }

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'errors' => ['No account found.']], 200);
        }
    }

}
