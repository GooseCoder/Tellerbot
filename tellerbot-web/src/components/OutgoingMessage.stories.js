import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import OutgoingMessage from './OutgoingMessage';

storiesOf('Outgoing Message', module)
    .addParameters({
        info: {
            text: `
                ### When to Use
            `,
            inline: true
        }
    })
    .add('User Message', () => {
        //const icon = text('Icon', 'robot');
        const user = object('Current User', {
            id: '00001',
            username: 'Guest',
            type: 'guest'
        });
        const content = text('Content', 'How things are going?');
        const publishDate = text('Publish Date', '12/01/2021');
        return (
            <OutgoingMessage
                user={user}
                content={content}
                publishDate={publishDate}
            />
        );
    });
