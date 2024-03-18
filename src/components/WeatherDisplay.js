import React, { Component } from 'react'

 class WeatherDisplay extends Component {
  render() {
    console.log('weather component',this.props.weatherToDisplay);
    return (
      <div>WWeather</div>
    )
  }
}


export default WeatherDisplay;