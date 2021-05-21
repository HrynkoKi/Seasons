import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui massive text loader">Loading...</div>
            </div>
        );
    }
}

export default Loader;
