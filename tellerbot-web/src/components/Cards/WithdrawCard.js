import React from 'react';
import Transaction from './Transaction';

function WithdrawCard({ dispatcher, id, data }) {

    const { currencyCode, accountId } = data;
    const transactionHandler = data => {
        dispatcher('makeWithdraw', { ...data, id });
    };
    return (
        <Transaction
            defaultCurrencyCode={currencyCode}
            accountId={accountId}
            buttonTitle="Withdraw"
            title="Withdraw from your account"
            transactionHandler={transactionHandler}
        />
    );
}

export default WithdrawCard;
