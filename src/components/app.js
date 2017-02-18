import React, { Component, PropTypes } from 'react';

import ActionBar from './action-bar';
import Question from './question';
import Splash from './splash';

class App extends Component {
    constructor(props) {
        super(props);

        this.startStep = this.startStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);

        this.state = {
            currentStep: 0,
            isNextReady: false,
            
            correctAnswers: 0,
            questions: [],
            
            result: {
                0: 'You definitely need more practicing',
                1: 'Not bad, but could be better',
                2: 'Not bad, but could be better',
                3: 'Not bad, but could be better',
                4: 'You are really getting somewhere, sport!',
                5: 'You are really getting somewhere, sport!',
                6: 'Nearly perfect!',
                7: 'Outstanding!',
                8: 'Outstanding!'
            }
        };
    }

    componentDidMount() {
        this.props.questions.then(res => {
            res.json().then((val) => {
                this.setState({
                    questions: val
                })
            })
        });
    }
    
    nextStep() {
        this.setState({
            currentStep: this.state.currentStep + 1,
            isNextReady: false
        });
    }

    startStep() {
        this.setState({
            currentStep: 1,
            correctAnswers: 0
        });
    }

    handleAnswer(correct) {
        this.setState({
            isNextReady: true,
            correctAnswers: correct ? this.state.correctAnswers + 1 : this.state.correctAnswers
        });
    }
    
    render() {
        const totalSteps = this.state.questions.length;
        const isStart = this.state.currentStep === 0;
        const isComplete = this.state.currentStep === totalSteps + 1;
        const isLast = this.state.currentStep === totalSteps;

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
                                heading={`You scored ${this.state.correctAnswers} of ${totalSteps}. ${this.state.result[this.state.correctAnswers]}`}
                                text="Share your result"
                            />
                        }

                        {
                            this.state.questions.map((item, idx) => {
                                if (this.state.currentStep === idx + 1) {
                                    return (
                                        <Question
                                            key={idx}
                                            answers={item.answers}
                                            isNextReady={this.state.isNextReady}
                                            onAnswer={this.handleAnswer}
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
                            isLast={isLast}
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

App.defaultProps = {
    questions: []    
};

App.propTypes = {
    questions: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

export default App;
