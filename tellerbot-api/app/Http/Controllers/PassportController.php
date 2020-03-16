<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

/**
 * Class PassportController
 * @package App\Http\Controllers
 */
class PassportController extends Controller
{
    /**
     * Handles Registration Request
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function register(Request $request)
    {
        try {
            $this->validate($request, [
                'name' => 'required|min:3',
                'username' => 'required|min:3',
                'type' => 'required|min:3',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:6'
            ]);

            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'type' => $request->type,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);
            $user->accounts()->create([
                'amount' => $request->accounts[0]['amount'],
                'type' => $request->accounts[0]['type'],
                'code' => $request->accounts[0]['code'],
                'currency_code' => $request->accounts[0]['currency_code']
            ])->transactions()->create([
                'amount' => $request->accounts[0]['amount'],
                'type' => 'DEPOSIT',
                'code' => $request->accounts[0]['code'],
                'currency_code' => $request->accounts[0]['currency_code'],
                'exchanged_currency_code' => $request->accounts[0]['currency_code'],
                'exchanged_amount' => $request->accounts[0]['amount']
            ]);
            $token = $user->createToken('Tellerbot')->accessToken;
            $user->accounts;
            return response()->json(['success' => true, 'user' => $user, 'access_token' => $token], 200);
        } catch (ValidationException $e) {
            return response()->json(['success' => false, 'errors' => $e->errors()], 200);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($credentials)) {
            $user = auth()->user();
            $user->accounts;
            $token = auth()->user()->createToken('Tellerbot')->accessToken;
            return response()->json(['success' => true, 'user'=> $user, 'access_token' => $token], 200);
        } else {
            return response()->json(['success' => false, 'errors' => ['UnAuthorized']], 401);
        }
    }

    /**
     * Returns Authenticated User Details
     *
     * @return JsonResponse
     */
    public function details()
    {
        return response()->json(['user' => auth()->user()], 200);
    }
}
