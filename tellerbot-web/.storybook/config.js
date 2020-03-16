import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import '../src/iconLibrary';

import tellerbotTheme from './tellerbotTheme';


import '../src/tellerbot.scss';
import 'bulma-helpers/css/bulma-helpers.min.css';

addParameters({
    options: {
        theme: tellerbotTheme
    }
});

addDecorator(
    withInfo({
        inline: true
    })
);

addDecorator(centered);
addDecorator(withKnobs);

const req = require.context('../src', true, /.stories.js$/);
configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);
