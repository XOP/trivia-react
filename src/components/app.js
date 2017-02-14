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
            totalSteps: 6,
            isNextReady: false
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
        const isStart = this.state.currentStep === 0;
        const isComplete = this.state.currentStep === this.state.totalSteps + 1;

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

                        <Question
                            step={this.state.currentStep}
                            totalSteps={this.state.totalSteps}
                        >
                            What is the main thing in the universe?
                        </Question>

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
