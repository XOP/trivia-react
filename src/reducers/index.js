import { combineReducers } from 'redux';

import QuestionsReducer from './questionsReducer';

const rootReducer = combineReducers({
    questions: QuestionsReducer
});

export default rootReducer;
