import React, { Component } from 'react';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';
import Loader from './components/Loader';

class App extends Component {
    state = { lat: null, errorMessage: '' };

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } else if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay latitude={this.state.lat} />;
        } else {
            return <Loader />;
        }
    }

    componentDidMount() {
        // Get geolocation of the user
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {}
}

export default App;
