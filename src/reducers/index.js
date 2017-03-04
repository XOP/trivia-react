import { combineReducers } from 'redux';

import QuestionsReducer from './questionsReducer';
import CurrentQuestionReducer from './currentQuestionReducer';

const rootReducer = combineReducers({
    currentQuestion: CurrentQuestionReducer,
    questions: QuestionsReducer
});

export default rootReducer;
