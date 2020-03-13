import React, { useState } from 'react';

import './App.css';
import TopBar from './TopBar';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSearch,
    faFemale,
    faMale,
    faHeart,
    faUser,
    faQuestion,
    faTruck,
    faCreditCard,
    faArrowRight,
    faEllipsisV,
    faStar,
    faStarHalfAlt,
    faPlus,
    faRobot,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import {
    faStar as farStar,
    faHeart as farHeart
} from '@fortawesome/free-regular-svg-icons';
import Chat from './Chat';

library.add(
    faSearch,
    faFemale,
    faMale,
    faHeart,
    farHeart,
    faUser,
    faQuestion,
    faTruck,
    faCreditCard,
    faArrowRight,
    faEllipsisV,
    faStar,
    farStar,
    faStarHalfAlt,
    faPlus,
    faRobot,
    faPaperPlane
);

function App() {
    const [loggedUser, setLoggedUser] = useState({
        id: '00001',
        type: 'guest',
        username: 'Guest'
    });
    const [messages, setMessages] = useState([]);

    const saveMessage = message => {
        const newDate = new Date();
        setMessages([
            ...messages,
            { ...message, publishDate: newDate.toDateString() }
        ]);
    };

    return (
        <div className="App">
            <TopBar loggedUser={loggedUser} />
            <Chat
                messages={messages}
                saveMessage={saveMessage}
                loggedUser={loggedUser}
            />
        </div>
    );
}

export default App;
