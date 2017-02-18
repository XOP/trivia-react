/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';

import App from './components/app';

require('./favicon.ico');

import './main.scss';

const getQuestions = () => {
    return fetch('http://beta.json-generator.com/api/json/get/Eycij5-KM');
};

render(
    <App 
        questions={getQuestions()}
    />,
    document.getElementById('app')
);
