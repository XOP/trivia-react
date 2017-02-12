import React, { Component, PropTypes } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e);
    }
    
    render() {
        return (
            <button 
                className="trivia-button"
                onClick={this.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.node,
    handleClick: PropTypes.func
};

export default Button;
