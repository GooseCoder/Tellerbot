import React from 'react';
import Transaction from './Transaction';

function DepositCard({ id, dispatcher, data }) {
    const { currencyCode, accountId } = data;

    const transactionHandler = data => {
        dispatcher('makeDeposit', { ...data, id });
    };
    return (
        <Transaction
            defaultCurrencyCode={currencyCode}
            accountId={accountId}
            buttonTitle="Deposit"
            title="Deposit into your account"
            transactionHandler={transactionHandler}
        />
    );
}

export default DepositCard;
