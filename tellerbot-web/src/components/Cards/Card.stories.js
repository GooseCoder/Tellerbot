import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import Card from './Card';

storiesOf('Card', module)
    .addParameters({
        info: {
            text: `
                ### When to Use
            `,
            inline: true
        }
    })
    .add('Generic Card', () => {
        //const icon = text('Icon', 'robot');
        const id = text('Id', '0001');
        const title = text('Title', 'Some card here');
        const dispatcher = (action, data) => {
            console.log(action, data);
        };
        return <Card id={id} title={title} dispatcher={dispatcher} />;
    })
    .add('Login Card', () => {
        //const icon = text('Icon', 'robot');
        const id = text('Id', '0001');
        const title = text('Title', 'Some card here');
        const type = text('Type', 'login');
        const dispatcher = (action, data) => {
            console.log(action, data);
        };
        return (
            <Card id={id} title={title} type={type} dispatcher={dispatcher} />
        );
    })
    .add('SignUp Card', () => {
        //const icon = text('Icon', 'robot');
        const id = text('Id', '0001');
        const title = text('Title', 'Some card here');
        const type = text('Type', 'signup');
        const dispatcher = (action, data) => {
            console.log(action, data);
        };
        return (
            <Card id={id} title={title} type={type} dispatcher={dispatcher} />
        );
    })
    .add('Deposit Card', () => {
        //const icon = text('Icon', 'robot');
        const id = text('Id', '0001');
        const title = text('Title', 'Some card here');
        const type = text('Type', 'deposit');
        const dispatcher = (action, data) => {
            console.log(action, data);
        };
        return (
            <Card id={id} title={title} type={type} dispatcher={dispatcher} />
        );
    })
    .add('Exchange Card', () => {
        //const icon = text('Icon', 'robot');
        const id = text('Id', '0001');
        const title = text('Title', 'Some card here');
        const type = text('Type', 'exchange');
        const dispatcher = (action, data) => {
            console.log(action, data);
        };
        return (
            <Card id={id} title={title} type={type} dispatcher={dispatcher} />
        );
    })
    .add('Help Card', () => {
        //const icon = text('Icon', 'robot');
        const id = text('Id', '0001');
        const title = text('Title', 'Some card here');
        const type = text('Type', 'help');
        const dispatcher = (action, data) => {
            console.log(action, data);
        };
        return (
            <Card id={id} title={title} type={type} dispatcher={dispatcher} />
        );
    })
    .add('Withdraw Card', () => {
        //const icon = text('Icon', 'robot');
        const id = text('Id', '0001');
        const title = text('Title', 'Some card here');
        const type = text('Type', 'withdraw');
        const dispatcher = (action, data) => {
            console.log(action, data);
        };
        return (
            <Card id={id} title={title} type={type} dispatcher={dispatcher} />
        );
    });
