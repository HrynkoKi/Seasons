import React, { Component } from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        displayText: 'Its hot',
        iconName: 'sun',
        iconColor: 'red',
    },
    winter: {
        displayText: 'Its chilly',
        iconName: 'snowflake',
        iconColor: 'blue',
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
        const { displayText, iconName, iconColor } = seasonConfig[season];

        return (
            <div className={`SeasonDisplay ${season}`}>
                <i
                    className={`SeasonDisplay__icon--left ${iconColor} massive ${iconName} icon`}
                ></i>
                <h1>{displayText}</h1>
                <i
                    className={`SeasonDisplay__icon--right ${iconColor} massive ${iconName} icon`}
                ></i>
            </div>
        );
    }
}

export default SeasonDisplay;
