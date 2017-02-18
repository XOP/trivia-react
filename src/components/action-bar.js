import React, { Component, PropTypes } from 'react';

import Button from './button';

class ActionBar extends Component {
    render() {
        return (
            <section className="trivia-action-bar">
                <div className="box">
                    {
                        this.props.isStart ?
                        <Button
                            full
                            mode="primary"
                            onClick={this.props.onStartClick}
                            size="large"
                        >
                            Start
                        </Button> : (
                            this.props.isComplete ?
                            <Button
                                full
                                mode="secondary"
                                onClick={this.props.onStartClick}
                                size="large"
                            >
                                Restart
                            </Button> :
                            <Button
                                disabled={!this.props.isNextReady}
                                full
                                mode="primary"
                                onClick={this.props.onNextClick}
                                size="medium"
                            >
                                {
                                    this.props.isLast ?
                                    'Show results' :
                                    'Next question'
                                }
                            </Button>
                        )
                    }
                </div>
            </section>
        );
    }
}

ActionBar.propTypes = {
    isStart: PropTypes.bool,
    isComplete: PropTypes.bool,
    isLast: PropTypes.bool,
    isNextReady: PropTypes.bool,
    onStartClick: PropTypes.func,
    onNextClick: PropTypes.func
};

export default ActionBar;
