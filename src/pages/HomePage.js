import React from "react";
import Footer from "../components/Footer";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import MapImage from "../components/MapImage";
console.log(process.env.REACT_APP_CITY_KEY);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityToSubmit: "",
      cityData: {},
      lat: "",
      lon: "",
      mapImage: "",
      displayError: false,
      errorMessage: "ugh ooo",
    };
  }

  handleCityInput = (event) => {
    console.log(event.target.value);
    this.setState({
      cityToSubmit: event.target.value,
    });
  };

  //add getLocationData
  submitCityHandler = async (event) => {
    event.preventDefault();
    try {
      let URL = `${process.env.REACT_APP_SERVER}/getLocation?cityNameToSearch=${this.state.cityToSubmit}`;
      let cityInfo = await axios.get(URL);
      let cityDataFromServer = cityInfo.data;
      // console.log("JJ", cityDataFromServer);
      this.setState({
        cityData: cityInfo,
        city: cityDataFromServer[0],
        mapImage: cityDataFromServer[1],
        lat: cityDataFromServer[2],
        lon: cityDataFromServer[3],
        displayError: false,
      });
    } catch (error) {
      console.log("ERROR.message", error.message);
      this.state({
        displayError: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row style={{ textAlign: "center" }}>
            <h1>WELCOME HOME</h1>
            <form onSubmit={this.submitCityHandler}>
              <label>
                Pick a City:
                <input type="text" onChange={this.handleCityInput} />
              </label>
              <button type="submit">Explore!</button>
            </form>
          </Row>

          <Row>
            <Col></Col>

            <Col>
              {this.state.error ? (
                <p>{this.state.errorMessage}</p>
              ) : (
                <>
                  <Card
                    className="card"
                    style={{
                      width: "38rem",
                      height: "28rem",
                      backgroundColor: "#c0d6df",
                      marginTop: "2rem"
                    }}
                  >
                  { this.state.mapImage === "" ? (""):(
                    <MapImage
                      mapImage={this.state.mapImage}
                      cityName={this.state.cityData.data[0]}
                      lat={this.state.lat}
                      lon={this.state.lon}
                    />
                    )}
                  </Card>
                </>
              )}
            </Col>
          </Row>

          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}

export default Home;
