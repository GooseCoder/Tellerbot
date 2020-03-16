import React from 'react';

import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import UserMenu from './UserMenu';

storiesOf('User Account', module)
    .addParameters({
        info: {
            text: `
                ### When to Use
            `,
            inline: true
        }
    })
    .add('Read Only', () => {
        const user = object('Current User', {
            id: '000001',
            type: 'guest',
            userName: 'Guest'
        });
        return <UserMenu user={user} />;
    });
