import React, { useState } from 'react';

import './iconLibrary';
import './App.css';

import TopBar from './components/TopBar';
import Chat from './components/Chat';
import ConfigurationService from './components/services/ConfigurationService';
import ActionService from './components/services/ActionService';
import CardService from './components/services/CardService';
import BotService from './components/services/BotService';
import ChatService from './components/services/ChatService';
import getExtract from './components/services/actions/getExtract';

function App() {
    const loadedConfiguration = new ConfigurationService();
    const chatService = new ChatService();
    const cardService = new CardService();
    const botService = new BotService();

    const [chatState, setChatState] = useState({
        loggedUser: {
            id: '00001',
            type: 'guest',
            username: 'Guest'
        },
        configuration: loadedConfiguration.getClientCredentials(),
        messages: [botService.greet()]
    });

    const dispatcher = (action, data) => {
        const actionService = new ActionService();
        actionService.processAction(action, data, chatState, setChatState);
    };

    const saveMessage = message => {
        const newDate = new Date();
        chatService.sendMessage(message.content).then(res => {
            const newMessage = {
                ...message,
                publishDate: newDate.toDateString()
            };
            if (res.data.success) {
                if (
                    cardService.authorizedCard(
                        res.data,
                        chatState.configuration
                    )
                ) {
                    if (res.data.intent === 'extract') {
                        res.data.state = chatState;
                    }

                    if (
                        res.data.intent === 'deposit' ||
                        res.data.intent === 'withdraw'
                    ) {
                        res.data.accountId =
                            chatState.loggedUser.accounts[0].id;
                        res.data.currencyCode =
                            chatState.loggedUser.accounts[0].currency_code;
                    }

                    const card = {
                        ...cardService.getCard(res.data),
                        publishDate: newDate.toDateString()
                    };
                    setChatState({
                        ...chatState,
                        messages: [
                            ...chatState.messages,
                            newMessage,
                            botService.defaultResponse(),
                            card
                        ]
                    });
                } else {
                    setChatState({
                        ...chatState,
                        messages: [
                            ...chatState.messages,
                            newMessage,
                            botService.custom(
                                'Please Log into your account first'
                            )
                        ]
                    });
                }
            } else {
                setChatState({
                    ...chatState,
                    messages: [...chatState.messages, newMessage]
                });
            }

            document
                .getElementById('chatbox')
                .scrollTo(0, document.getElementById('chatbox').scrollHeight);
            console.log(chatState);
        });
    };

    return (
        <div className="has-navbar-fixed-top">
            <TopBar loggedUser={chatState.loggedUser} />
            <Chat
                messages={chatState.messages}
                saveMessage={saveMessage}
                loggedUser={chatState.loggedUser}
                dispatcher={dispatcher}
            />
        </div>
    );
}

export default App;
