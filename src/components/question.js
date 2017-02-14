import React, { Component, PropTypes } from 'react';

class Question extends Component {
    render() {
        const isVisible = this.props.step > 0 && this.props.step <= this.props.totalSteps;

        if (!isVisible) return null;

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
            </section>
        );
    }
}

Question.propTypes = {
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

export default Question;
