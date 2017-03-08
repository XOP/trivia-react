import { combineReducers } from 'redux';

import initialState from './initialState';

import questionsReducer from './questionsReducer';
import resultsReducer from './resultsReducer';

const currentStepReducer = (state = initialState.currentStep, action) => {
    switch (action.type) {
        case 'FIRST_QUESTION':
            return initialState.currentStep + 1;

        case 'NEXT_QUESTION':
            return action.payload + 1;

        default:
            return state;
    }
};

const currentQuestionReducer = (state = initialState.currentQuestion, action) => {
    switch (action.type) {
        case 'FIRST_QUESTION':
            return questionsReducer()[0];

        case 'NEXT_QUESTION':
            return questionsReducer()[action.payload];

        default:
            return state;
    }
};

const scoreReducer = (state = initialState.score, action) => {
    switch (action.type) {
        case 'SELECT_CORRECT_ANSWER':
            return state + 1;

        case 'SELECT_INCORRECT_ANSWER':
            return state;

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    currentStep: currentStepReducer,
    currentQuestion: currentQuestionReducer,

    score: scoreReducer,

    questions: questionsReducer,
    results: resultsReducer
});

export default rootReducer;
