import React from "react";
import "./PostJob.css";
import { Link } from "react-router-dom";
import UserPic from "../../images/resources/user-pic.png";
import PostJobModal from "../PostJobModal/PostJobModal";

const PostJob = () => {
  return (
    <div>
      <div className="post-topbar">
        <div className="user-picy">
          <img src={UserPic} alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <PostJobModal />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
