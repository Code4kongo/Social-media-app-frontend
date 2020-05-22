import React, { Component } from "react";
import Footer from "../container/Footer/Footer";
import SignInContainer from "../container/SignInContainer/SignInContainer";
export class SignIn extends Component {
  render() {
    return (
      <div>
        <SignInContainer />
        <Footer />
      </div>
    );
  }
}

export default SignIn;
