import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Answer from '../components/answer';
import Question from '../_components/question';

class SmartQuestion extends Component {
    render() {
        const {
            question,
            answers = []
        } = this.props.question;

        console.log('step', this.props.step);
        
        
        return (
            <Question
                isCorrect={null}
                question={question}
                step={this.props.step}
                totalSteps={this.props.totalSteps}
            >
                {
                    answers.length && answers.map( (item, idx) => {
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

SmartQuestion.defaultProps = {
    question: {}
};

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
    question: state.currentQuestion
});

export default connect(mapStateToProps)(SmartQuestion);
