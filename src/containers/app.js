import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    firstQuestionSelect,
    nextQuestionSelect,
    selectAnswer,
    nextQuestionReady
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
    }

    handleStart() {
        this.props.firstQuestionSelect();
        this.props.nextQuestionReady(false); // ensure restart
    }

    handleNext() {
        this.props.nextQuestionSelect(this.props.currentStep);
        this.props.nextQuestionReady(false);
    }

    handleAnswer(isCorrect) {
        this.props.selectAnswer(isCorrect);
        this.props.nextQuestionReady();
    }

    renderResult(isComplete) {
        if (!isComplete) return null;

        const {
            results,
            score,
            totalSteps
        } = this.props;

        const allScores = Object.keys(results).map(item => parseInt(item, 10));
        const highestScore = Math.max.apply(null, allScores);

        const resultOutput = (score <= highestScore) ? results[score] : results[highestScore];

        return (
            <Splash
                heading={`You score ${score} of ${totalSteps}`}
                text={resultOutput}
            />
        );
    }
    
    render() {
        const { 
            currentStep, 
            totalSteps,
            isNextReady
        } = this.props;
        
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

                        {this.renderResult(isComplete)}

                        {
                            !isComplete &&
                            <Question
                                step={currentStep}
                                isNextReady={isNextReady}
                                onAnswer={this.handleAnswer}
                                totalSteps={totalSteps}
                            />       
                        }

                        <ActionBar
                            isStart={isStart}
                            isComplete={isComplete}
                            isLastQuestion={isLastQuestion}
                            isNextReady={isNextReady}
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
    isNextReady: PropTypes.bool,
    
    score: PropTypes.number,
    
    firstQuestionSelect: PropTypes.func,
    nextQuestionSelect: PropTypes.func,
    selectAnswer: PropTypes.func,
    nextQuestionReady: PropTypes.func,

    results: PropTypes.object
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        firstQuestionSelect,
        nextQuestionSelect,
        selectAnswer,
        nextQuestionReady
    }, dispatch)
);

const mapStateToProps = state => {
    const currentStep = state.currentStep;
    const totalSteps = state.questions.length;
    const isNextReady = state.isNextReady;
    const score = state.score;
    const results = state.results;

    return {
        currentStep,
        totalSteps,
        isNextReady,
        score,
        results
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
