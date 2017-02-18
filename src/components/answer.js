import React, { Component, PropTypes } from 'react';

import cls from 'classnames';

class Answer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isAnswered: false
        }
    }
    
    handleClick(e) {
        if (this.props.isDisabled) return false;

        this.setState({
            isAnswered: true
        });

        return this.props.onClick(this.props.correct, e);
    }

    render() {
        return (
            <div className="trivia-answer" onClick={this.handleClick}>
                <div className={cls('box', {
                    'is-disabled': this.props.isDisabled
                })}>
                    <div className="is-block has-text-left">
                        {this.props.children}

                        {
                            this.state.isAnswered &&
                            <div>
                                <strong>
                                    {
                                        this.props.correct ?
                                            <i className="fa fa-check"></i> :
                                            <i className="fa fa-times"></i>
                                    }
                                </strong>
                                &nbsp;
                                <em>
                                    {this.props.hint}
                                </em>
                            </div>
                        }    
                    </div>
                </div>
            </div>
        );
    }
}

Answer.propTypes = {
    children: PropTypes.node,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Answer;
