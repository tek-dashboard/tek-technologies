import React from "react";
import Footer from "../components/Footer";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import MapImage from "../components/MapImage";
import WeatherDisplay from "../components/WeatherDisplay";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityToSubmit: "",
      cityData: {},
      lat: "",
      lon: "",
      weatherToDisplay: [],
      mapImage: "",
      movieList: [],
      displayError: false,
      errorMessage: "error from state attribute",
    };
  }

  handleCityInput = (event) => {
    this.setState({
      cityToSubmit: event.target.value,
    });
  };

  submitCityHandler = async (event) => {
    event.preventDefault();
    try {
      let URL = `${process.env.REACT_APP_SERVER}/getLocation?cityNameToSearch=${this.state.cityToSubmit}`;
      let cityInfo = await axios.get(URL);
      let cityDataFromServer = cityInfo.data;
      this.setState({
        cityData: cityInfo,
        city: cityDataFromServer[0],
        mapImage: cityDataFromServer[1],
        lat: cityDataFromServer[2],
        lon: cityDataFromServer[3],
        displayError: false,
      });

      this.getWeather(
        cityDataFromServer[2],
        cityDataFromServer[3],
        this.state.cityToSubmit
      );
      this.handleMovie(this.state.cityToSubmit);
    } catch (error) {
      this.state({
        displayError: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
  };

  getWeather = async (lat, lon, locationName) => {
    console.log(lat, lon, locationName);
    try {
      const weatherToDisplay = await axios.get(
        `${process.env.REACT_APP_SERVER}/weather`,
        {
          params: {
            lat: lat,
            lon: lon,
            locationName: locationName,
          },
        }
      );
      console.log("did we get weather back", weatherToDisplay.data);
      this.setState({
        displayError: false,
        weatherToDisplay: weatherToDisplay.data,
      });
    } catch (error) {
      this.setState({
        mapImage: false,
        displayError: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
  };

  handleMovie = async (cityName) => {
    // console.log('Movie search term',cityName);
    try {
      let URL = await axios.get(
        `${process.env.REACT_APP_SERVER}/movies?movieSearch=${cityName}`
      );
      console.log("url", URL.data);
      this.setState({
        movieList: URL.data,
      });
    } catch (error) {
        this.setState({
          mapImage: false,
          displayError: true,
          errorMessage: `An error occurred: ${error.response.status}`,
        });
    }
  };

  render() {
    console.log(this.state.movieList);
    return (
      <>
        <Container fluid>
          <Row style={{ textAlign: "center" }}>
            <h1>WELCOME HOME</h1>
            <form onSubmit={this.submitCityHandler}>
              <label>
                Pick a City:
                <input type="text" onChange={this.handleCityInput} />
              </label>
              <button style={{ marginLeft: "50px" }} type="submit">
                Explore!
              </button>
            </form>
          </Row>

          <Row>
            <Col>
              <Card
                className="card"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "38rem",
                  height: "28rem",
                  backgroundColor: "#c0d6df",
                  marginTop: "2rem",
                }}
              >
                <WeatherDisplay dayForecast={this.state.weatherToDisplay} />
              </Card>
            </Col>
            <Col>
              {this.state.error ? (
                <p>{this.state.errorMessage}</p>
              ) : (
                <>
                  <Card
                    className="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "38rem",
                      height: "28rem",
                      backgroundColor: "#c0d6df",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    {this.state.mapImage === "" ? (
                      ""
                    ) : (
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
            <Col>
              <Card
                className="card"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "30rem",
                  height: "28rem",
                  backgroundColor: "#c0d6df",
                  marginTop: "2rem",
                  textAlign: "center",
                }}
              >
                1
                {/* add movies list here START  */}
                <MovieList movieList={this.state.movieList}/>
              </Card>
            </Col>
            <Col>
              <Card
                className="card"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "30rem",
                  height: "28rem",
                  backgroundColor: "#c0d6df",
                  marginTop: "2rem",
                  textAlign: "center",
                }}
              >
                2
              </Card>
            </Col>
            <Col>
              <Card
                className="card"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "30rem",
                  height: "28rem",
                  backgroundColor: "#c0d6df",
                  marginTop: "2rem",
                  textAlign: "center",
                }}
              >
                3
              </Card>
            </Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}

export default Home;
