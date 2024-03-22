import React, { Component } from "react";
import { Accordion } from "react-bootstrap";

class WeatherDisplay extends Component {
  render() {
    console.log("weather from state", this.props.dayForecast);

    return (
      <>
       <Accordion defaultActiveKey={['0']} alwaysOpen>
                  {/* {this.state.weatherToDisplay.map((dayForecast, index) => ( */}
        {this.props.dayForecast.map((dayForecast, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>DATE: {dayForecast.time}</Accordion.Header>
            <Accordion.Body>
              <img
                src={dayForecast.icon}
                height="50px"
                width="50px"
                alt={"weather icon"}
              />
              <ul
                style={{
                  float: "right",
                  marginRight: "200px",
                }}
              >
                <li>FORECAST: {dayForecast.forecast}</li>
                <li>MOON: {dayForecast.moon}</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
        </Accordion>
        {/* <Accordion.Item eventKey={this.props.index}>
          <Accordion.Header>
            DATE: {this.props.dayForecast.time}
          </Accordion.Header>
          <Accordion.Body
          
          >
            <img
              src={this.props.dayForecast.icon}
              height="50px"
              width="50px"
              alt={"weather icon"}
            />
            <ul
             style={{
                  float: "right",
                  marginRight: "200px"
                }}
            >
              <li>FORECAST: {this.props.dayForecast.forecast}</li>
              <li>MOON: {this.props.dayForecast.moon}</li>
            </ul>
            
            
          </Accordion.Body>
        </Accordion.Item> */}
      </>
    );
  }
}

export default WeatherDisplay;
