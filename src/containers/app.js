import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextQuestionSelect } from '../actions';

import ActionBar from '../_components/action-bar';

import Question from './question';

const resources = {
    actionBar: {
        nextQuestion: 'Next Question',
        restart: 'Restart',
        showResults: 'Show Results',
        start: 'Start'
    }
};

class App extends Component {
    constructor(props) {
        super(props);

        this.handleAnswer = this.handleAnswer.bind(this);

        this.state = {
            isNextReady: true
        };
    }

    handleAnswer() {
        this.props.nextQuestionSelect(this.props.currentStep);
    }

    render() {
        const { currentStep, totalSteps } = this.props;

        const isStart = currentStep === 0;
        const isComplete = currentStep === totalSteps + 1;
        const isLastQuestion = currentStep === totalSteps;

        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter-desktop">

                        <Question
                            step={currentStep}
                            isNextReady={this.state.isNextReady}
                            onAnswer={this.handleAnswer}
                            totalSteps={totalSteps}
                        />

                        <ActionBar
                            isStart={isStart}
                            isComplete={isComplete}
                            isLastQuestion={isLastQuestion}
                            isNextReady={this.state.isNextReady}
                            onStartClick={this.handleAnswer}
                            onNextClick={this.handleAnswer}
                            resources={resources.actionBar}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    currentStep: PropTypes.number,
    totalSteps: PropTypes.number,
    nextQuestionSelect: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({ nextQuestionSelect }, dispatch);

const mapStateToProps = state => {
    const currentStep = state.currentStep;
    const totalSteps = state.questions.length;

    return {
        currentStep,
        totalSteps
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
