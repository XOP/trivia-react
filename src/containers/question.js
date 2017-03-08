import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Answer from '../_components/answer';
import Question from '../_components/question';

class SmartQuestion extends Component {
    render() {
        if (!this.props.question) {
            return null;
        }

        const {
            question,
            answers = []
        } = this.props.question;

        return (
            <Question
                question={question}
                step={this.props.step}
                totalSteps={this.props.totalSteps}
            >
                {
                    answers.map( (item, idx) => {
                        return (
                            <Answer
                                key={idx}
                                isDisabled={this.props.isNextReady}
                                isCorrect={item.correct}
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
    step: PropTypes.number,
    question: PropTypes.object,
    totalSteps: PropTypes.number
};

const mapStateToProps = state => ({
    question: state.currentQuestion
});

export default connect(mapStateToProps)(SmartQuestion);
