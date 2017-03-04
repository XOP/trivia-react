import React, { Component, PropTypes } from 'react';

import Question from '../containers/question';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    
    handleAnswer(e) {
        e.preventDefault();

        console.log('answer click');
    }
    
    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter-desktop">

                        <Question
                            onAnswer={this.handleAnswer}
                            totalSteps="10"
                        />

                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {

};

App.propTypes = {

};

export default App;
