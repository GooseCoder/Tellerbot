import React from 'react';
import Exchange from './Exchange';

function ExchangeCard({ dispatcher, id }) {
    const exchangeHandler = data => {
        dispatcher('makeExchange', { ...data, id });
    };
    return (
        <Exchange
            defaultCurrencyCode="USD"
            buttonTitle="Exchange"
            title="Exchange rates"
            exchangeHandler={exchangeHandler}
        />
    );
}

export default ExchangeCard;
