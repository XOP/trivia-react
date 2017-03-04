import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextQuestionSelect } from '../actions/nextQuestionSelect';

import Question from './question';

const totalSteps = 10;

class App extends Component {
    constructor(props) {
        super(props);

        this.handleAnswer = this.handleAnswer.bind(this);
        
        this.state = {
            currentStep: this.props.currentStep,
            isNextReady: this.props.isNextReady
        };
    }
    
    handleAnswer() {
        this.props.nextQuestionSelect(this.state.currentStep);

        this.setState({
            currentStep: this.state.currentStep + 1
        });
    }
    
    render() {
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

                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    currentStep: 0,
    isNextReady: false
};

App.propTypes = {
    currentStep: PropTypes.number,
    isNextReady: PropTypes.bool,
    nextQuestionSelect: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ nextQuestionSelect }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
