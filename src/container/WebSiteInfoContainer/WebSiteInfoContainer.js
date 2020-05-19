import React from "react";
import "./WebSiteInfoContainer.css";
import WebSiteInfo from "../../components/WebSiteInfo/WebsiteInfo";
import Blog from "../../components/blog/Blog";
export default function WebSiteInfoContainer() {
  return (
    <div>
      <div className="">
        <WebSiteInfo />
        <Blog />
      </div>
    </div>
  );
}
