import React, { Component } from 'react';

import ActionBar from './action-bar';
import Question from './question';
import Splash from './splash';

class App extends Component {
    constructor(props) {
        super(props);

        this.startStep = this.startStep.bind(this);
        this.nextStep = this.nextStep.bind(this);

        this.state = {
            currentStep: 0,
            isNextReady: false,
            
            correctAnswers: 0,
            questions: [
                {
                    question: 'Question 1',
                    answers: [
                        {
                            answer: 'Answer 1',
                            hint: 'You are right!',
                            correct: true
                        },
                        {
                            answer: 'Answer 2',
                            hint: 'Nope, not even close',
                            correct: false
                        },
                        {
                            answer: 'Answer 3',
                            hint: 'Keep practicing',
                            correct: false
                        }
                    ]
                },
                {
                    question: 'Question 2',
                    answers: [
                        {
                            answer: 'Answer 1',
                            hint: 'Nope, not even close',
                            correct: false
                        },
                        {
                            answer: 'Answer 2',
                            hint: 'You are right!',
                            correct: true
                        },
                        {
                            answer: 'Answer 3',
                            hint: 'Keep practicing',
                            correct: false
                        }
                    ]
                }
            ]
        };
    }

    nextStep() {
        this.setState({
            currentStep: this.state.currentStep + 1
        });
    }

    startStep() {
        this.setState({
            currentStep: 1,
            isNextReady: true
        });
    }

    render() {
        const totalSteps = this.state.questions.length;
        const isStart = this.state.currentStep === 0;
        const isComplete = this.state.currentStep === totalSteps + 1;

        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter-desktop">

                        {
                            !isComplete &&
                            <Splash
                                heading="Welcome"
                                text="Let's play Trivia"
                            />
                        }

                        {
                            isComplete &&
                            <Splash
                                heading="You did great!"
                                text="Share your result"
                            />
                        }

                        {
                            this.state.questions.map((item, idx) => {
                                if (this.state.currentStep === idx + 1) {
                                    return (
                                        <Question
                                            answers={item.answers}
                                            step={this.state.currentStep}
                                            totalSteps={totalSteps}
                                        >
                                            {item.question}
                                        </Question>
                                    );
                                }
                            })
                        }
                        
                        <ActionBar
                            isStart={isStart}
                            isComplete={isComplete}
                            isNextReady={this.state.isNextReady}
                            onStartClick={this.startStep}
                            onNextClick={this.nextStep}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
