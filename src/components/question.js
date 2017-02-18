import React, { Component, PropTypes } from 'react';

import Answer from './answer';

class Question extends Component {
    render() {
        return (
            <section className="trivia-question">
                <div className="box">
                    <em className="subtitle is-6">
                        {this.props.step} / {this.props.totalSteps}
                    </em>
                    <br/>
                    <strong className="title is-4">
                        {this.props.children}
                    </strong>
                </div>
                <div className="box">
                    {
                        this.props.answers.map( (item, idx) => {
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
                </div>
            </section>
        );
    }
}

Question.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.object),
    isNextReady: PropTypes.bool,
    onAnswer: PropTypes.func,
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    totalSteps: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    children: PropTypes.node
};

Question.defaultProps = {
    answers: []
};

export default Question;
