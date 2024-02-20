import React from "react";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import axios from "axios";
console.log(process.env.REACT_APP_CITY_KEY);

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
      errorMessage: "ugh ooo",
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
    let cityDataFromServer = cityInfo.data;
    console.log('JJ',cityDataFromServer);
    this.setState({
      cityData: cityInfo,
      city: cityDataFromServer[0],
      mapImage: cityDataFromServer[1],
      lat: cityDataFromServer[2],
      lon: cityDataFromServer[3],
      displayError: false,
    });
  } catch(error) {
    console.log("ERROR.message", error.message);
    this.state({
      displayError: true,
      errorMessage: `An error occurred: ${error.response.status}`,
    });
  }
};
  
  render() {
    console.log('asdfasdfwerqwer',this.state.cityData);
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
            <p>{this.state.city}</p>
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