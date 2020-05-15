import React, { Component } from "react";
import "./MainHome.css";
import UserProfiction from "../../components/UserProfiction/UserProfiction";
import PostJob from "../../components/PostJob/PostJob";
import AllPost from "../../components/AllPost/AllPost";
import TopJobs from "../../components/TopJobs/TopJobs";
import MostViews from "../../components/MostViewd/MostView";

export class Main extends Component {
  render() {
    return (
      <main className="main-section">
        <div className="container">
          <div className="main-section-data">
            <div className="row">
              <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                <div>
                  <UserProfiction />
                </div>
              </div>
              <div className="col-lg-6 col-md-8 no-pd">
                <div className="main-ws-sec">
                  <PostJob/>
                  <AllPost/>
                </div>
              </div>
              <div className="col-lg-3 pd-right-none no-pd">
                <div className="right-sidebar">
                  <TopJobs />
                  <MostViews />
                  <MostViews />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
