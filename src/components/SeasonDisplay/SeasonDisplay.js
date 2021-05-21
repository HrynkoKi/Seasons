import React, { Component } from 'react';

const seasonConfig = {
    summer: {
        displayText: 'Its hot',
        iconName: 'sun',
    },
    winter: {
        displayText: 'Its chilly',
        iconName: 'snowflake',
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

class SeasonDisplay extends Component {
    render() {
        const season = getSeason(this.props.latitude, new Date().getMonth());
        const { displayText, iconName } = seasonConfig[season];

        return (
            <div className="SeasonDisplay">
                <i className={`massive ${iconName} icon`}></i>
                <h1>{displayText}</h1>
                <i className={`massive ${iconName} icon`}></i>
            </div>
        );
    }
}

export default SeasonDisplay;
