import React, { Component } from "react";
import { Accordion } from "react-bootstrap";

class WeatherDisplay extends Component {
  render() {
    console.log("weather from state", this.props.dayForecast);

    return (
      <>
        <Accordion
          defaultActiveKey="0"
          style={{
            marginTop: "150px",
          }}
        >
          {this.props.dayForecast.map((dayForecast, index) => (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>DATE: {dayForecast.time}</Accordion.Header>
              <Accordion.Body
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                <img
                  src={dayForecast.icon}
                  // height="50px"
                  // width="50px"
                  alt={"weather icon"}
                />
                <ul>
                  <li>FORECAST: {dayForecast.forecast}</li>
                  <li>MOON: {dayForecast.moon}</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  }
}

export default WeatherDisplay;
