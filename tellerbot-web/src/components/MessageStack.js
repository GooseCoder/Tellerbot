import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';
import Card from './Cards/Card';

function MessageStack({ messages, dispatcher }) {
    let messageList = messages.map(message => {
        switch (message.type) {
            case 'incoming':
                return (
                    <div className="columns" key={message.id}>
                        <div className="column is-half">
                            <IncomingMessage
                                user={message.user}
                                content={message.content}
                                publishDate={message.publishDate}
                            />
                        </div>
                        <div className="column is-half"></div>
                    </div>
                );
            case 'outgoing':
                return (
                    <div className="columns" key={message.id}>
                        <div className="column is-half"></div>
                        <div className="column is-half">
                            <OutgoingMessage
                                user={message.user}
                                content={message.content}
                                publishDate={message.publishDate}
                            />
                        </div>
                    </div>
                );
            case 'card':
                return (
                    <div className="columns" key={message.id}>
                        <div className="column is-3"></div>
                        <div className="column is-6">
                            <Card
                                id={message.id}
                                title={message.content.title}
                                type={message.content.type}
                                data={message.content.data}
                                dispatcher={dispatcher}
                            />
                        </div>
                        <div className="column is-3"></div>
                    </div>
                );
            default:
                return <div key={message.id}></div>;
        }
    });
    return (
        <div
            className="box is-radiusless is-fullheight is-chat-box"
            id="chatbox"
        >
            {messageList}
        </div>
    );
}

export default MessageStack;
