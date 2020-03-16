import React, { useState } from 'react';

function LoginCard({ id, loginHandler, cancelHandler }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
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
            <div className="field is-grouped">
                <div className="control">
                    <button
                        className="button is-link"
                        onClick={() =>
                            loginHandler('loginUser', { email, password, id })
                        }
                    >
                        Log - In
                    </button>
                </div>
                <div className="control">
                    <button
                        className="button is-link is-light"
                        onClick={() => cancelHandler('closeCard', { id })}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginCard;
