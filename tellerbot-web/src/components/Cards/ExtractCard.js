import React, { useState, useEffect } from 'react';
import getExtract from '../services/actions/getExtract';

function ExtractCard({ id, data, dispatcher }) {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getExtract(data.state).then(res => {
            if (res.data.success) {
                setTransactions(res.data.account.transactions);
            } else {
                setTransactions([]);
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
                Account: {data.state.loggedUser.accounts[0].id}-
                {data.state.loggedUser.accounts[0].type}, TOTAL:{' '}
                {parseFloat(data.state.loggedUser.accounts[0].amount).toFixed(
                    2
                )}{' '}
                {data.state.loggedUser.accounts[0].currency_code}
            </div>
            {transactionList}
        </div>
    );
}

export default ExtractCard;
