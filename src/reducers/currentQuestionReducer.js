import initialState from './initialState';
import questions from './questions';

export default (state = initialState.currentQuestion, { type, currentStep }) => {
    switch (type) {
        case 'NEXT_QUESTION':
            return questions[currentStep];
    }

    return state;
};
