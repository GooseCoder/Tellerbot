import React from 'react';

function HelpCard() {
    return (
        <div>
            You can Use certain phrases and dialog to access certain features,
            here is a list of the available functions and some examples of how
            to use them:
            <ul>
                <li>Log in: "I want to login" | "I need to log"</li>
                <li>Sign Up: "I want to sign" | "I need to sign"</li>
                <li>
                    Balance: "I want my balance" | "I need my balance" | "I
                    would like my account balance"
                </li>
                <li>
                    Deposits: "I want to deposit" | "I need to make a deposit" |
                    "I would like to deposit some money"
                </li>
                <li>
                    Withdraws: "I want to withdraw" | "I need to make a
                    withdraw" | "I would like to withdraw some money"
                </li>
                <li>
                    Exchange rates: "I want to make a exchange" | "I need to
                    exchange some money" | "I would like to calculate exchange
                    rates."
                </li>
            </ul>
        </div>
    );
}

export default HelpCard;
