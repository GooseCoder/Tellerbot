import React, { useState, useEffect } from 'react';
import getExtract from '../services/actions/getExtract';

function ExtractCard({ id, data, dispatcher }) {
    const [transactions, setTransactions] = useState([]);
    const [account, setAccount] = useState(data.state.loggedUser.accounts[0]);

    useEffect(() => {
        getExtract(data.state).then(res => {
            if (res.data.success) {
                setTransactions(res.data.account.transactions);
                setAccount(res.data.account);
            } else {
                setTransactions([]);
                setAccount(data.state.loggedUser.accounts[0]);
            }
        });
    }, []);

    const transactionList = (
        <ul>
            {transactions.map(transaction => {
                let exchanged = '';
                if (
                    transaction.currency_code !==
                    transaction.exchanged_currency_code
                ) {
                    exchanged = `(CONVERTED FROM: ${transaction.exchanged_amount} ${transaction.exchanged_currency_code})`;
                }
                return (
                    <li key={transaction.id}>
                        <strong>
                            {new Date(transaction.created_at).toDateString(
                                'yyy-MM-dd'
                            )}
                            :
                        </strong>
                        {transaction.type} -{' '}
                        {parseFloat(transaction.amount).toFixed(2)}{' '}
                        {transaction.currency_code} {exchanged}
                    </li>
                );
            })}
        </ul>
    );
    return (
        <div>
            <div>
                Account: {account.id}-{account.type}, TOTAL:
                {parseFloat(account.amount).toFixed(2)} {account.currency_code}
            </div>
            {transactionList}
        </div>
    );
}

export default ExtractCard;
