import React, { Component, PropTypes } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter-desktop">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.any
};

export default App;
