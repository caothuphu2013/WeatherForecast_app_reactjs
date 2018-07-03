import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "57a0253953196901f7b9c31e11a217c5";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    style: {
      border: 'none'
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
              &appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country && data.main) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        style: {border: '2px #f16051 solid'},
        error: ""
      })
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        style: {
          border: 'none'
        },
        error: "Không tìm được địa điểm."
      })
    }


  }
  render() {
    return (
      <div className='content'>
        <div className='container'>
          <div className='wrapper'>
            <Form getWeather={this.getWeather} />
            <Weather weather={this.state} style={this.state.style}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
