import React, { Component } from "react";
import UsersSocialMediaLinks from "../../components/SocialMediaLink/SocialMediaLink";
import UserFeed from "../../components/PersonalFeed/PersonalFeed";
import UserInfo from "../../components/PersonalInfo/PersonalInfo";
import UserJob from "../../components/UserJob/UserJob";
import UserNotification from "../../components/UserNotification/UserNotification";
import UserPortfolio from "../../components/UserPortfolio/UserPortfolio";

export class MainUserProfil extends Component {
  render() {
    return (
      <div>
        This is the user profil
        <UsersSocialMediaLinks />
        <UserInfo />
        <UserJob />
        <UserPortfolio />
        <UserNotification />
        <UserFeed />
      </div>
    );
  }
}

export default MainUserProfil;
