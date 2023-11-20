import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

class DashBoard extends Component {
 


  render() {
    return (
      <>
        <section className="app">
          <h1>Secret Cats!</h1>
        </section>
      </>
    );
  }
}

export default withAuth0(DashBoard);
