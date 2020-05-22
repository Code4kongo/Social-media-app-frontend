import React, { Component } from "react";
import Header from "../container/Header/Header";
import CommunityGuideLineContainer from "../container/CommunityGuidelineContainer/CommunityGuidelineContainer";
import Footer from "../container/Footer/Footer";

export class CommunityGuideLinePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CommunityGuideLineContainer />
        <Footer />
      </div>
    );
  }
}

export default CommunityGuideLinePage;
