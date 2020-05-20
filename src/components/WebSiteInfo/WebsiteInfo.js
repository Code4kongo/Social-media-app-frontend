import React from "react";
import "./WebsiteInfo.css";
import AboutImage from "../../images/forum.png";
//import WebsiteInfoContainer from "../../container/WebSiteInfoContainer/WebSiteInfoContainer";
export default function WebsiteInfo() {
  return (
    <div>
      <section className="Company-overview">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2>Company Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                felis massa, commodo sed fringilla id, dignissim ut eros.
                Aliquam at lacinia diam, eget scelerisque massa. Nunc ut porta
                ante. Praesent blandit, neque nec hendrerit luctus, sem urna
                imperdiet ligula, eu egestas purus massa dictum arcu. Integer
                cursus enim nec magna dapibus laoreet. Donec egestas fringilla
                risus quis volutpat. Aliquam semper massa ut sollicitudin
                consectetur. Suspendisse ac iaculis ligula. Duis ut velit id
                nisi vulputate dapibus.
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={AboutImage} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="gmap_canvas"
              src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
            <anchor href="https://www.pureblack.de"></anchor>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="video">
            <iframe
              className="video-iframe"
              title="vid"
              src="https://www.youtube.com/watch?v=LqhwFh6lRwY&t=6s"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
