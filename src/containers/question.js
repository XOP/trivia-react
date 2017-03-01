import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Answer from '../components/answer';
import Question from '../_components/question';

class SmartQuestion extends Component {
    render() {
        return (
            <Question
                isCorrect={null}
                question={this.props.question}
                step={this.props.step}
                totalSteps={this.props.totalSteps}
            >
                {
                    this.props.question.answers.map( (item, idx) => {
                        return (
                            <Answer
                                key={idx}
                                isDisabled={this.props.isNextReady}
                                correct={item.correct}
                                hint={item.hint}
                                onClick={this.props.onAnswer}
                            >
                                {item.answer}
                            </Answer>
                        );
                    })
                }
            </Question>
        );
    }
}

SmartQuestion.propTypes = {
    isNextReady: PropTypes.bool,
    onAnswer: PropTypes.func,
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    totalSteps: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

const mapStateToProps = state => ({
    isNextReady: state.isNextReady,
    question: state.question,
    step: state.currentStep,
});

export default connect(mapStateToProps)(SmartQuestion);
