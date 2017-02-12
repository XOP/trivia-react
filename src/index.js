/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';

import App from './components/app';

import Button from './components/button';
import Splash from './components/splash';

require('./favicon.ico');

import './main.scss';

render(
    <App>
        <Splash
            heading="Welcome"
            text="Let's play Trivia"
        />

        <div className="section">
            <Button
                full
                mode="primary"
                size="medium"
            >
                Start
            </Button>
        </div>
    </App>,
    document.getElementById('app')
);
