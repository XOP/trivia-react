export const firstQuestionSelect = () => ({
    type: 'FIRST_QUESTION'
});

export const nextQuestionSelect = step => ({
    type: 'NEXT_QUESTION',
    payload: step
});

export const selectAnswer = isCorrect => ({
    type: 'SELECT_ANSWER',
    payload: isCorrect
});

export const nextQuestionReady = (ready = true) => ({
    type: 'NEXT_READY_TOGGLE',
    payload: ready
});
