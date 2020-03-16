<?php


namespace App\Http\Controllers;

use App\ChatManager;
use App\IntentManager;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    protected $chatManager;

    public function __construct()
    {
        $this->chatManager = new ChatManager(
            new IntentManager()
        );
    }

    public function processMessage(Request $request)
    {
        $data = $request->all();
        return $this->chatManager->processMessage($data['message']);
    }
}
