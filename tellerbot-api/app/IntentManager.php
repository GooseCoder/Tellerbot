<?php


namespace App;

/**
 * Class IntentManager
 * @package App
 */
class IntentManager
{
    protected $verbs = [];
    protected $predicates = [];
    protected $intents = [];

    /**
     * IntentManager constructor.
     */
    public function __construct()
    {
        $this->verbs = ["can", "can't", "would", "wouldn't", "could", "need", "needed", "require", "give", "want", "like", "make", "do"];
        $this->predicates = ["log", "login", "access", "sign", "signup", "sign up", "account", "log in", "help", "assist", "assistance", "support", "withdraw", "deposit", "extract", "change", "exchange", "balance", "information", "info"];
        $this->intents = [
            "login" => ["log", "login", "access", "log in"],
            "signup" => ["sign", "signup", "sign up", "create", "account"],
            "help" => ["help", "assist", "assistance", "support", "info", "information"],
            "withdraw" => ["withdraw"],
            "deposit" => ["deposit"],
            "extract" => ["extract", "balance"],
            "exchange" => ["exchange"],
        ];
    }

    /**
     * @param $message
     * @return bool|int|string
     */
    public function getIntent($message)
    {
        $tokens = $this->tokenize($message);
        if ($this->validateVerb($this->verbs, $tokens)) {
            return $this->findIntent(
                $this->intents,
                $this->processIntent($this->predicates, $tokens)
            );
        }
    }

    public function getDialog($intent) {
        if ($intent) {
            $dialogs = [
                "login" => "Please use the form to log in.",
                "signup" => "Please use the form to sign up.",
                "help" => "A small guidance here.",
                "withdraw" => "You can withdraw using the card, please check you have sufficient funds.",
                "deposit" => "You can deposit on various currencies, conversion rates are applied automatically.",
                "extract" => "Here is your account balance.",
                "exchange" => "You can check exchange rates using this card.",
            ];
            return $dialogs[$intent];
        } else {
            return '';
        }
    }

    /**
     * @param $message
     * @return array
     */
    public function tokenize($message)
    {
        return array_map(function ($a) {
            return strtolower($a);
        }, explode(" ", $message));
    }

    /**
     * @param $verbs
     * @param $tokens
     * @return bool
     */
    public function validateVerb($verbs, $tokens)
    {
        foreach ($tokens as $token) {
            if (in_array($token, $verbs)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param $predicates
     * @param $tokens
     * @return array
     */
    public function processIntent($predicates, $tokens)
    {
        $approved = [];
        foreach ($tokens as $token) {
            foreach ($predicates as $predicate) {
                if (preg_match("/(${predicate})/", $token)) {
                    $approved[] = $predicate;
                }
            }
        }
        return $approved;
    }

    /**
     * @param $intents
     * @param $candidates
     * @return bool|int|string
     */
    public function findIntent($intents, $candidates)
    {
        foreach ($intents as $id => $intent) {
            foreach ($candidates as $candidate) {
                if (in_array($candidate, $intent)) {
                    return $id;
                }
            }
        }
        return false;
    }
}
