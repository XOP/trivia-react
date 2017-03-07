export function nextQuestionSelect(currentStep) {
    return {
        type: 'NEXT_QUESTION',
        currentStep: currentStep + 1
    }
}
