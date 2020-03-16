import React, { useState } from 'react';

function Exchange({ defaultCurrencyCode, buttonTitle, exchangeHandler }) {
    const [currencyCode, setCurrencyCode] = useState(defaultCurrencyCode);
    const [targetCurrencyCode, setTargetCurrencyCode] = useState(
        defaultCurrencyCode
    );
    const [amount, setAmount] = useState('0');
    const codes = [
        'CAD',
        'HKD',
        'ISK',
        'PHP',
        'DKK',
        'HUF',
        'CZK',
        'GBP',
        'RON',
        'SEK',
        'IDR',
        'INR',
        'BRL',
        'RUB',
        'HRK',
        'JPY',
        'THB',
        'CHF',
        'EUR',
        'MYR',
        'BGN',
        'TRY',
        'CNY',
        'NOK',
        'NZD',
        'ZAR',
        'USD',
        'MXN',
        'SGD',
        'AUD',
        'ILS',
        'KRW',
        'PLN'
    ];
    const options = codes.map((code, id) => (
        <option key={id} value={code}>
            {code}
        </option>
    ));
    return (
        <div className="field">
            <label className="label">Exchange</label>
            <div className="field has-addons">
                <p className="control">
                    <span className="select">
                        <select
                            value={currencyCode}
                            onChange={e => setCurrencyCode(e.target.value)}
                        >
                            {options}
                        </select>
                    </span>
                </p>
                <p className="control is-expanded">
                    <input
                        className="input"
                        type="text"
                        placeholder="Account Amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </p>
                <p className="control">
                    <span className="select">
                        <select
                            value={targetCurrencyCode}
                            onChange={e =>
                                setTargetCurrencyCode(e.target.value)
                            }
                        >
                            {options}
                        </select>
                    </span>
                </p>
                <p
                    className="control"
                    onClick={() =>
                        exchangeHandler({
                            amount,
                            currencyCode,
                            targetCurrencyCode
                        })
                    }
                >
                    <a className="button i-white">{buttonTitle}</a>
                </p>
            </div>
        </div>
    );
}

export default Exchange;
