import React, { Component } from 'react';

class Loader extends Component {
    render() {
        Loader.defaultProps = {
            message: 'Loading...',
        };

        return (
            <div className="ui active dimmer">
                <div className="ui massive text loader">
                    {this.props.message}
                </div>
            </div>
        );
    }
}

export default Loader;
