import React, { Component } from "react";
import { Accordion } from "react-bootstrap";

class WeatherDisplay extends Component {
  render() {
    return (
      <>
        <Accordion
          defaultActiveKey="0"
          style={{
            marginTop: "150px",
          }}
        >
          {this.props.dayForecast.map((dayForecast, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>DATE: {dayForecast.time}</Accordion.Header>
              <Accordion.Body
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={dayForecast.icon} alt={"weather icon"} />
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
