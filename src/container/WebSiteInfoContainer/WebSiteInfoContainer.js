import React from "react";
import "./WebSiteInfoContainer.css";
import WebSiteInfo from "../../components/WebSiteInfo/WebsiteInfo";
import Blog from "../../components/blog/Blog";

const  WebSiteInfoContainer = () => {
  return ( 
      <div>
        <WebSiteInfo />
        <Blog />
      </div>
   );
}
 
export default WebSiteInfoContainer ;
