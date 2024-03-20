import React, { Component } from "react";

class WeatherDisplay extends Component {
  render() {
    console.log("weather from state", this.props.dayForecast);

    return (
      <>
        <ul>
          <li>{this.props.dayForecast.time}</li>
          <li>{this.props.dayForecast.forecast}</li>

          <li>
            <img
              src={this.props.dayForecast.icon}
              height="50px"
              width="50px"
              alt={"weather icon"}
            />
          </li>
          <li>{this.props.dayForecast.moon}</li>
        </ul>
      </>
    );
  }
}

export default WeatherDisplay;
