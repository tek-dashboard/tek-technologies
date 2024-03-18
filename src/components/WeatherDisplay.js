import React, { Component } from 'react'

 class WeatherDisplay extends Component {
  render() {
    console.log('weather from state',this.props.dayForecast);
   


    return (
      <>
       {this.props.dayForecast.forecast}
       {this.props.dayForecast.time}
      </>
    )
  }
}


export default WeatherDisplay;