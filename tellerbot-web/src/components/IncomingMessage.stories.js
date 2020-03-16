import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import IncomingMessage from './IncomingMessage';

storiesOf('Incoming Message', module)
    .addParameters({
        info: {
            text: `
                ### When to Use
            `,
            inline: true
        }
    })
    .add('Bot Message', () => {
        //const icon = text('Icon', 'robot');
        const user = object('Current User', {
            id: '0928093123',
            type: 'tellerbot',
            username: 'TellerBot'
        });
        const content = text('Content', 'How things are going?');
        const publishDate = text('Publish Date', '12/01/2021');
        return (
            <IncomingMessage
                user={user}
                content={content}
                publishDate={publishDate}
            />
        );
    });
