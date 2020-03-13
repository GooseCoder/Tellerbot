import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSearch,
    faFemale,
    faMale,
    faHeart,
    faShoppingBag,
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

library.add(
    faSearch,
    faFemale,
    faMale,
    faHeart,
    farHeart,
    faShoppingBag,
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
