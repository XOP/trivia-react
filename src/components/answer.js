import React, { Component, PropTypes } from 'react';

class Answer extends Component {
    render() {

        return (
            <div className="trivia-answer">
                <div className="box">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Answer.propTypes = {
    children: PropTypes.node
};

export default Answer;
