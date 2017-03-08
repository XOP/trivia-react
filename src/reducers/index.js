import { combineReducers } from 'redux';

import initialState from './initialState';
import questionsReducer from './questionsReducer';

const currentStepReducer = (state = initialState.currentStep, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return action.payload + 1;

        default:
            return state;
    }
};

const currentQuestionReducer = (state = initialState.currentQuestion, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return questionsReducer()[action.payload + 1];

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    currentStep: currentStepReducer,
    currentQuestion: currentQuestionReducer,
    questions: questionsReducer
});

export default rootReducer;
