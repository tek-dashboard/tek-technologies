import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

class SecretContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  //We need a token to send to the backend to prove we are authenticated. Lets generate the token  Json Web Token = JWT(pronouced 'JOT');
  // getCats = async () => {
  //   try {
  //     if (this.props.auth0.isAuthenticated) {
  //       const res = await this.props.auth0.getIdTokenClaims();
  //       const jwt = res.__raw;
  //       console.log("token: ", jwt);

  //       const config = {
  //         method: "get",
  //         baseURL: process.env.REACT_APP_SERVER,
  //         url: "/cats",
  //         headers: { "Authorization": `Bearer ${jwt}` },
  //       };
  //       console.log("🚀 ~ SecretContent ~ getCats= ~ config:", config)

  //       let axiosData = await axios(config);
  //       console.log("!!!!", axiosData.data);
  //       this.setState({
  //         cats: axiosData.data,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // componentDidMount() {
  //   this.getCats();
  // }

  render() {

  
    return (
      <>
        <h1>Secret Cats!</h1>
      
      </>
    );
  }
}

export default withAuth0(SecretContent);