import React, { Component, PropTypes } from 'react';

class Splash extends Component {
    render() {
        return (
            <section className="trivia-splash">
                <div className="trivia-splash__content">
                    <div className="trivia-splash__heading">
                        {this.props.heading}
                    </div>
                    <div className="trivia-splash__text">
                        {this.props.text}
                    </div>
                </div>
            </section>
        );
    }
}

Splash.propTypes = {
    heading: PropTypes.node,
    text: PropTypes.node
};

export default Splash;
