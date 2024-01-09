import React from "react";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import axios from "axios";

class Home extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: {},
      lat: "",
      lon: "",
      mapImage: "",
      displayError: false,
      errorMessage: "",
    };
  }

  handleCityInput = (event) => {
    console.log(event.target.value);
    this.setState({
      city: event.target.value,
    });
  };


  //add getLocationData
  submitCityHandler = async (event) => {
    event.preventDefault();
   try{
    let URL = `${process.env.REACT_APP_SERVER}/getLocation?cityNameToSearch=${this.state.city}`;
    let cityInfo = await axios.get(URL);
    console.log(cityInfo);
    // let lat = cityInfo.data[0].lat;
    // let lon = cityInfo.data[0].lon;
    // let mapImage = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${cityInfo.data[0].lat},${cityInfo.data[0].lon}&zoom=13&size=1000x1000`;
    // console.log('1. Response object:', cityInfo.data[0]);
    // this.setState({
    //   cityData: cityInfo.data[0],
    //   lat: lat,
    //   lon: lon,
    //   mapImage: mapImage,
    //   displayError: false,
    // });
  } catch(error) {
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
        <div>WELCOME HOME</div>
        <form onSubmit={this.submitCityHandler}>
          <label>
            Pick a City:
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
        {this.state.error ? (
          <p>{this.state.errorMessage}</p>
        ) : (
          // <p>{this.state.cityData}</p>
          <>
            {/* // <p>{this.state.cityData}</p> */}
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img
                className="cardImage"
                variant="top"
                src={this.state.mapImage}
              />
              <Card.Body>
                <Card.Title>{this.state.cityData.display_name}</Card.Title>
                <Card.Text>
                  {this.state.cityData.lat} , {this.state.cityData.lon}
                </Card.Text>
              </Card.Body>
            </Card>
            </>
        )}
        <Footer />
      </>
    );
  }
}

export default Home;