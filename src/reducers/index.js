import { combineReducers } from 'redux';

import CurrentQuestionReducer from './currentQuestionReducer';

const rootReducer = combineReducers({
    currentQuestion: CurrentQuestionReducer
});

export default rootReducer;
