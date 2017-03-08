export const nextQuestionSelect = step => ({
    type: 'NEXT_QUESTION',
    payload: step
});

export const nextQuestionReady = (ready = true) => ({
    type: 'NEXT_QUESTION_READY',
    payload: ready
});
