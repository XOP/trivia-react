import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    firstQuestionSelect,
    nextQuestionSelect,
    selectCorrectAnswer,
    selectIncorrectAnswer
} from '../actions';

import ActionBar from '../_components/action-bar';
import Splash from '../_components/splash';

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

        this.handleStart = this.handleStart.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);

        this.state = {
            isNextReady: false // todo
        };
    }

    handleStart() {
        this.props.firstQuestionSelect();
    }

    handleNext() {
        this.props.nextQuestionSelect(this.props.currentStep);
    }

    handleAnswer(isCorrect) {
        if (isCorrect) {
            this.props.selectCorrectAnswer();
        } else {
            this.props.selectIncorrectAnswer();
        }
    }

    composeScore() {
        const {
            results,
            score,
            totalSteps
        } = this.props;

        const allScores = Object.keys(results);
        const highestScore = Math.max.apply(allScores, this);

        const userScore = (score <= highestScore) ? results[score] : results[highestScore];

        return `Your score: ${userScore} of ${totalSteps}`;
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
                                heading={this.composeScore()}
                                text="Share your result"
                            />
                        }

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
                            onStartClick={this.handleStart}
                            onNextClick={this.handleNext}
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
    nextQuestionSelect: PropTypes.func,
    selectCorrectAnswer: PropTypes.func,
    selectIncorrectAnswer: PropTypes.func
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        firstQuestionSelect,
        nextQuestionSelect,
        selectCorrectAnswer,
        selectIncorrectAnswer
    }, dispatch)
);

const mapStateToProps = state => {
    const currentStep = state.currentStep;
    const totalSteps = state.questions.length;
    const score = state.score;

    return {
        currentStep,
        totalSteps,
        score
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
