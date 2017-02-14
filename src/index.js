/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';

import App from './components/app';

require('./favicon.ico');

import './main.scss';

render(
    <App />,
    document.getElementById('app')
);
