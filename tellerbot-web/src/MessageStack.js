import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';

function MessageStack({ messages }) {
    let messageList = messages.map(message => {
        if (message.user.type === 'tellerbot') {
            return (
                <div className="columns" key={message.id}>
                    <div className="column is-two-third">
                        <IncomingMessage
                            user={message.user}
                            content={message.content}
                            publishDate={message.publishDate}
                        />
                    </div>
                    <div className="column is-one-third"></div>
                </div>
            );
        } else {
            return (
                <div className="columns" key={message.id}>
                    <div className="column is-one-third"></div>
                    <div className="column is-two-thirds">
                        <OutgoingMessage
                            user={message.user}
                            content={message.content}
                            publishDate={message.publishDate}
                        />
                    </div>
                </div>
            );
        }
    });
    return <div className="box">{messageList}</div>;
}

export default MessageStack;
