import React, { useState } from 'react';

import './iconLibrary';
import './App.css';

import TopBar from './components/TopBar';
import Chat from './components/Chat';
import ConfigurationService from './components/services/ConfigurationService';
import ActionService from './components/services/ActionService';
import BotService from './components/services/BotService';

function App() {
    const loadedConfiguration = new ConfigurationService();
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

    return (
        <div className="has-navbar-fixed-top">
            <TopBar loggedUser={chatState.loggedUser} />
            <Chat
                messages={chatState.messages}
                loggedUser={chatState.loggedUser}
                dispatcher={dispatcher}
            />
        </div>
    );
}

export default App;
