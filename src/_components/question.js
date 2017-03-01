import React, { PropTypes } from 'react';

const Question = props => {
    const {
        children,
        isCorrect,
        question,
        step,
        totalSteps
    } = props;
    
    return (
        <section className="trivia-question">
            <div className="box">
                <em className="subtitle is-6">
                    {step} / {totalSteps}
                </em>
                <br/>
                <strong className="title is-4">
                    {question}
                </strong>
            </div>
            <div className="box">
                {children}
            </div>
        </section>
    );
};

Question.propTypes = {
    children: PropTypes.any,
    isCorrect: PropTypes.bool,
    question: PropTypes.node,
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    totalSteps: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

export default Question;
