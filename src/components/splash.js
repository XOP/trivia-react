import React, { Component, PropTypes } from 'react';

class Splash extends Component {
    render() {
        return (
            <section className="trivia-splash">
                <div className="section">
                    <div className="trivia-splash__heading">
                        <h2 className="title is-2">
                            {this.props.heading}
                        </h2>
                    </div>
                    <div className="trivia-splash__text">
                        <h4 className="subtitle is-4">
                            {this.props.text}
                        </h4>
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
