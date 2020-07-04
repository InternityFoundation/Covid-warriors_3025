import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to SignUp</h1>
        <div>
          <button>
            <Link to="/personal">Go to Personal Details</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
