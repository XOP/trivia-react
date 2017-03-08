import React, { PropTypes } from 'react';

const Question = props => {
    const {
        children,
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
    children: PropTypes.node,
    question: PropTypes.node,
    step: PropTypes.number,
    totalSteps: PropTypes.number
};

export default Question;
