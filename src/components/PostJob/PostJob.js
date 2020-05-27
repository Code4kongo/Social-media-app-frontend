import React from "react";
import "./PostJob.css";
import UserPic from "../../images/resources/user-pic.png";

const  PostJob = () => {
  return ( 
    <div>
    <div className="post-topbar">
      <div className="user-picy">
        <img src={UserPic} alt="" />
      </div>
      <div className="post-st">
        <ul>
          <li>
            <a className="post-jb active" href="/" title="">
              Post a Job
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
   );
}
 
export default PostJob;
