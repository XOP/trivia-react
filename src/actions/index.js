export const firstQuestionSelect = () => ({
    type: 'FIRST_QUESTION'
});

export const nextQuestionSelect = step => ({
    type: 'NEXT_QUESTION',
    payload: step
});

export const selectCorrectAnswer = () => ({
    type: 'SELECT_CORRECT_ANSWER'
});

export const selectIncorrectAnswer = () => ({
    type: 'SELECT_INCORRECT_ANSWER'
});

export const nextQuestionReady = (ready = true) => ({
    type: 'NEXT_READY_TOGGLE',
    payload: ready
});
