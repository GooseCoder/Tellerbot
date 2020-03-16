<?php


namespace App;


class ChatManager
{
    protected $intentManager;

    public function __construct(IntentManager $intentManager)
    {
        $this->intentManager = $intentManager;
    }

    public function processMessage($message)
    {
        $result = $this->intentManager->getIntent($message);
        return [
            "success" => ($result ? true : false),
            "intent" => $result
        ];
    }
}
