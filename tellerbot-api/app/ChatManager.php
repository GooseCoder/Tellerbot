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
        $intent = $this->intentManager->getIntent($message);
        $dialog = $this->intentManager->getDialog($intent);
        return [
            "success" => ($intent ? true : false),
            "intent" => $intent,
            "dialog" => $dialog
        ];
    }
}
