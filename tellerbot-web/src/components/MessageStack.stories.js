import React from 'react';

import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import MessageStack from './MessageStack';

storiesOf('Message List', module)
    .addParameters({
        info: {
            text: `
                ### When to Use
            `,
            inline: true
        }
    })
    .add('Messages List', () => {
        //const icon = text('Icon', 'robot');
        const messages = [
            {
                id: '00001',
                type: 'outgoing',
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
                type: 'incomming',
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
                type: 'outgoing',
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
                type: 'outgoing',
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

        return <MessageStack {...props} />;
    })
    .add('Messages List with Card', () => {
        //const icon = text('Icon', 'robot');
        const actionHandler = (action, data) => {
            console.log({ action, data });
            return { action, data };
        };

        const messages = [
            {
                id: '00001',
                type: 'outgoing',
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
                type: 'incomming',
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
                type: 'outgoing',
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
                type: 'outgoing',
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
                    title: 'Please Login',
                    type: 'login',
                    data: {}
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

        const dispatcher = (action, data) => {
            console.log(action, data);
        }

        return <MessageStack {...props} dispatcher={dispatcher}/>;
    });
