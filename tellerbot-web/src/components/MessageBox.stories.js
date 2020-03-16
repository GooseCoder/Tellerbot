import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import MessageBox from './MessageBox';

storiesOf('Message Box', module)
    .addParameters({
        info: {
            text: `
                ### When to Use
            `,
            inline: true
        }
    })
    .add('Test typing', () => {
        //const icon = text('Icon', 'robot');
        const content = text('Content', 'Hi Tellerbot!');
        const placeholder = text('Placeholder', 'Type your message...');
        const sendHandler = content => console.log('Message:', content);
        return (
            <MessageBox
                content={content}
                placeholder={placeholder}
                sendHandler={sendHandler}
            />
        );
    });
