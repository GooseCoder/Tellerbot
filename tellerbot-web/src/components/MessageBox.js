import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MessageBox({ content, placeholder, sendHandler }) {
    const [inputValue, setInputValue] = useState(content);
    const localHandler = () => {
        if (inputValue) {
            sendHandler(inputValue);
            setInputValue('');
        }
    };
    return (
        <span className="container">
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input
                        className="input is-size-5"
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder={placeholder}
                    />
                </div>
                <div className="control">
                    <button className="button is-text" onClick={localHandler}>
                        <FontAwesomeIcon
                            icon="arrow-alt-circle-right"
                            size="2x"
                        />
                    </button>
                </div>
            </div>
        </span>
    );
}

export default MessageBox;
