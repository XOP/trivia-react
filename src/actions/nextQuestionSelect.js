export function nextQuestionSelect(currentStep) {
    return {
        type: 'NEXT_QUESTION',
        payload: currentStep + 1
    }
}
