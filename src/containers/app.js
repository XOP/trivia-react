import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextQuestionSelect } from '../actions/nextQuestionSelect';

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
            currentStep: 0
        };
    }
    
    handleAnswer() {
        this.props.nextQuestionSelect(this.state.currentStep);

        this.setState({
            currentStep: this.state.currentStep + 1
        });
    }
    
    render() {
        const totalSteps = 10;
        const isStart = this.state.currentStep === 0;
        const isComplete = this.state.currentStep === totalSteps + 1;
        const isLast = this.state.currentStep === totalSteps;
        
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter-desktop">

                        <Question
                            step={this.state.currentStep}
                            isNextReady={this.state.isNextReady}
                            onAnswer={this.handleAnswer}
                            totalSteps={totalSteps}
                        />

                        <ActionBar
                            isStart={isStart}
                            isComplete={isComplete}
                            isLastQuestion={isLast}
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

App.defaultProps = {
    isNextReady: false
};

App.propTypes = {
    isNextReady: PropTypes.bool,
    nextQuestionSelect: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ nextQuestionSelect }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
