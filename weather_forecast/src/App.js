import React, { Component } from 'react';
import Title from './components/Title'; 
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
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
              &appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }
  render() {
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather weather={this.state}/>
      </div>
    );
  }
}

export default App;
