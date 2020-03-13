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
    .add('Messages ReadOnly', () => {
        //const icon = text('Icon', 'robot');
        const messages = [
            {
                id: '00001',
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
    });
