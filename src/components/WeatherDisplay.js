import React, { Component } from "react";
import { Accordion } from "react-bootstrap";

class WeatherDisplay extends Component {
  render() {
    console.log("weather from state", this.props.dayForecast);

    return (
      <>
        <Accordion.Item eventKey={this.props.index}>
          <Accordion.Header>
            DATE: {this.props.dayForecast.time}
          </Accordion.Header>
          <Accordion.Body>
            <img
              src={this.props.dayForecast.icon}
              height="50px"
              width="50px"
              alt={"weather icon"}
            />
            FORECAST: {this.props.dayForecast.forecast}
            MOON: {this.props.dayForecast.moon}
          </Accordion.Body>
        </Accordion.Item>
      </>
    );
  }
}

export default WeatherDisplay;
