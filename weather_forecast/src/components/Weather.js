import React from 'react';

class Weather extends React.Component {

    render() {
        return (
            <div>
                {this.props.weather.city && this.props.weather.country && <p>Location: {this.props.weather.city} - {this.props.weather.country}</p>}
                {this.props.weather.temperature && <p>Temperature: {this.props.weather.temperature}</p>}
                {this.props.weather.humidity && <p>Humidity: {this.props.weather.humidity}</p>}
                {this.props.weather.description && <p>Conditions: {this.props.weather.description}</p>}
            </div>
        )
    }
}

export default Weather;