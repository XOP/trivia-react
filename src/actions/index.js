import {
    FIRST_QUESTION,
    NEXT_QUESTION,
    SELECT_ANSWER,
    NEXT_READY_TOGGLE
} from '../constants';

export const firstQuestionSelect = () => ({
    type: FIRST_QUESTION
});

export const nextQuestionSelect = step => ({
    type: NEXT_QUESTION,
    payload: step
});

export const selectAnswer = isCorrect => ({
    type: SELECT_ANSWER,
    payload: isCorrect
});

export const nextQuestionReady = (ready = true) => ({
    type: NEXT_READY_TOGGLE,
    payload: ready
});
