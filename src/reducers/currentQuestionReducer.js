import QuestionsReducer from './questionsReducer';

const firstQuestion = QuestionsReducer()[0];

export default (state = firstQuestion, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return QuestionsReducer()[action.payload];
    }

    return state;
};
