import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class MapImage extends Component {
  render() {
    return (
      <>
        <Card.Img
          className="cardImage"
          variant="top"
          style={{
            width: "32rem",
            height: "20rem",
            margin: "0 auto",
            marginTop: "2rem",
          }}
          src={this.props.mapImage}
        />
        <Card.Body>
          <Card.Title>{this.props.cityName}</Card.Title>
          <Card.Text>
            Latitude: {this.props.lat} , Longitude: {this.props.lon}
          </Card.Text>
        </Card.Body>
      </>
    );
  }
}

export default MapImage;
