import React from 'react';
import MessageStack from './MessageStack';
import MessageBox from './MessageBox';

function Chat({ messages, saveMessage, loggedUser, dispatcher }) {
    const message = {
        user: { ...loggedUser },
        content: ''
    };

    const sendHandler = newContent => {
        saveMessage({
            ...message,
            type: 'outgoing',
            content: newContent,
            id: Math.random()
                .toString(36)
                .substring(7)
        });
    };

    return (
        <div className="container is-fullhd has-padding-10">
            <MessageStack messages={messages} dispatcher={dispatcher} />
            <MessageBox
                sendHandler={sendHandler}
                content=""
                placeholder="Type your message..."
                dispatcher={dispatcher}
            />
        </div>
    );
}

export default Chat;
