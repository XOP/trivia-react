/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';

import App from './components/app';

import Button from './components/button';
import Splash from './components/splash';

require('./favicon.ico');

render(
    <App>
        <Splash
            heading="Welcome"
            text="Let's play Trivia"
        />
        <Button>Start</Button>
    </App>,
    document.getElementById('app')
);
