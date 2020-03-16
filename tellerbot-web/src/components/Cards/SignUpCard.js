import React, { useState } from 'react';

function SignUpCard({ id, dispatcher }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [accountCurrencyCode, setAccountCurrencyCode] = useState('USD');
    const [accountAmount, setAccountAmount] = useState('');

    return (
        <div>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input
                        className="input"
                        value={username}
                        type="text"
                        placeholder="Text input"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        className="input"
                        value={email}
                        type="text"
                        placeholder="Text input"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input
                        className="input"
                        value={password}
                        type="password"
                        placeholder="Password..."
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Account - Initial deposit.</label>
                <div className="field has-addons">
                    <p className="control">
                        <span
                            className="select"
                            value={accountCurrencyCode}
                            onChange={e =>
                                setAccountCurrencyCode(e.target.value)
                            }
                        >
                            <select>
                                <option>USD</option>
                                <option>LBR</option>
                                <option>EUR</option>
                            </select>
                        </span>
                    </p>
                    <p className="control is-expanded">
                        <input
                            className="input"
                            type="text"
                            placeholder="Account Amount"
                            value={accountAmount}
                            onChange={e => setAccountAmount(e.target.value)}
                        />
                    </p>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button
                        className="button is-link"
                        onClick={() =>
                            dispatcher('signupUser', {
                                id,
                                username,
                                email,
                                password,
                                accounts: [
                                    {
                                        amount: accountAmount,
                                        currency_code: accountCurrencyCode
                                    }
                                ]
                            })
                        }
                    >
                        Sign Up
                    </button>
                </div>
                <div className="control">
                    <button
                        className="button is-link is-light"
                        onClick={() => dispatcher('closeCard', { id })}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUpCard;
