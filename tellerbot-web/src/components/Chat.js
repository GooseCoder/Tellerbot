import React from 'react';
import MessageStack from './MessageStack';
import MessageBox from './MessageBox';

function Chat({ messages, dispatcher }) {
    return (
        <div className="container is-fullhd has-padding-10">
            <MessageStack messages={messages} dispatcher={dispatcher} />
            <MessageBox
                content=""
                placeholder="Type your message..."
                dispatcher={dispatcher}
            />
        </div>
    );
}

export default Chat;
