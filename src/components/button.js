import React, { Component, PropTypes } from 'react';

import cls from 'classnames';

class Button extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e);
    }
    
    render() {
        const {
            full,
            size,
            mode
        } = this.props;

        return (
            <button 
                className={cls('button', {
                    'is-fullwidth': full,
                    [`is-${size}`]: size,
                    [`is-${mode}`]: mode
                })}
                onClick={this.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.node,
    handleClick: PropTypes.func,
    full: PropTypes.bool,
    mode: PropTypes.string,
    size: PropTypes.string
};

export default Button;
