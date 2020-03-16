import React from 'react';

import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import Chat from './Chat';

storiesOf('Chat', module)
    .addParameters({
        info: {
            text: `
                ### When to Use
            `,
            inline: true
        }
    })
    .add('Normal Chat', () => {
        //const icon = text('Icon', 'robot');
        const messages = [
            {
                id: '00001',
                type: 'message',
                user: {
                    id: '00001',
                    username: 'Guest',
                    type: 'guest'
                },
                content: 'Hello There',
                publishDate: '01/01/2021'
            },
            {
                id: '00002',
                type: 'message',
                user: {
                    id: '00002',
                    username: 'TellerBot',
                    type: 'tellerbot'
                },
                content: 'Hello, how are you doing?',
                publishDate: '01/01/2021'
            },
            {
                id: '00003',
                type: 'message',
                user: {
                    id: '00001',
                    username: 'Guest',
                    type: 'guest'
                },
                content: 'Fine, Thanks. I have something to ask you.',
                publishDate: '01/01/2021'
            },
            {
                id: '00004',
                type: 'message',
                user: {
                    id: '00001',
                    username: 'Guest',
                    type: 'guest'
                },
                content: 'I would like to open an account.',
                publishDate: '01/01/2021'
            }
        ];

        const props = {
            messages: [
                object('Msg01', messages[0]),
                object('Msg02', messages[1]),
                object('Msg03', messages[2]),
                object('Msg04', messages[3])
            ]
        };

        const loggedUser = object('Logged User', {
            id: '00001',
            type: 'guest',
            username: 'Guest'
        });

        const saveMessage = content => {
            console.log('saving message:', content);
        };

        return (
            <Chat
                {...props}
                saveMessage={saveMessage}
                loggedUser={loggedUser}
            />
        );
    })
    .add('Chat with Cards', () => {
        //const icon = text('Icon', 'robot');
        const messages = [
            {
                id: '00001',
                type: 'message',
                user: {
                    id: '00001',
                    username: 'Guest',
                    type: 'guest'
                },
                content: 'Hello There',
                publishDate: '01/01/2021'
            },
            {
                id: '00002',
                type: 'message',
                user: {
                    id: '00002',
                    username: 'TellerBot',
                    type: 'tellerbot'
                },
                content: 'Hello, how are you doing?',
                publishDate: '01/01/2021'
            },
            {
                id: '00003',
                type: 'message',
                user: {
                    id: '00001',
                    username: 'Guest',
                    type: 'guest'
                },
                content: 'Fine, Thanks. I have something to ask you.',
                publishDate: '01/01/2021'
            },
            {
                id: '00004',
                type: 'message',
                user: {
                    id: '00001',
                    username: 'Guest',
                    type: 'guest'
                },
                content: 'I would like to open an account.',
                publishDate: '01/01/2021'
            },
            {
                id: '00005',
                type: 'card',
                content: {
                    type: 'login'
                },
                publishDate: '01/01/2021'
            }
        ];

        const props = {
            messages: [
                object('Msg01', messages[0]),
                object('Msg02', messages[1]),
                object('Msg03', messages[2]),
                object('Msg04', messages[3]),
                object('Msg05', messages[4])
            ]
        };

        const loggedUser = object('Logged User', {
            id: '00001',
            type: 'guest',
            username: 'Guest'
        });

        const saveMessage = content => {
            console.log('saving message:', content);
        };

        return (
            <Chat
                {...props}
                saveMessage={saveMessage}
                loggedUser={loggedUser}
            />
        );
    });
