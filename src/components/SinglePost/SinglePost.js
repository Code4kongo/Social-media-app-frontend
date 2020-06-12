import React from "react";
import "./SinglePost.css";
import IconMeedia from '../../images/icon8.png'
import IconCountry from '../../images/icon9.png'
import IconLike from '../../images/liked-img.png'
import PostCommments from "../PostComments/PostComments";

const  SinglePost = props => {
  let {  title, country, author, content, date, likes, comments } = props
  // postImage
  return (
    <div>
      <div className="posts-section">
        <div className="posty">
          <div className="post-bar no-margin">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/us-pc2.png" alt="" />
                <div className="usy-name">
                  <h3>{ author }</h3>
                  <span>
                    <img src="images/clock.png" alt="" />{date}
                  </span>
                </div>
              </div>
              <div className="ed-opts">
                <a href="/" title="" className="ed-opts-open">
                  <i className="la la-ellipsis-v"></i>
                </a>
                <ul className="ed-options">
                  <li><a href="/" >Edit Post</a></li>
                  <li><a href="/" >Unsaved </a></li>
                  <li><a href="/" >Unbid </a></li>
                  <li><a href="/" >Close </a></li>
                  <li><a href="/" >Hide</a></li>
                </ul>
              </div>
            </div>
            <div className="epi-sec">
              <ul className="descp">
                <li>
                  <img src={IconMeedia} alt="" />
                  <span>243CongoNetwork</span>
                </li>
                <li>
                  <img src={IconCountry} alt="" />
                  <span>{ country }</span>
                </li>
              </ul>
              <ul className="bk-links">
                <li>
                  <a href="/" title=""><i className="la la-bookmark"></i></a>
                </li>
                <li>
                  <a href="/" title=""><i className="la la-envelope"></i></a>
                </li>
              </ul>
            </div>
            <div className="job_descp">
              <h3> {title} </h3>
              <p>{content}</p>
              <ul className="skill-tags">
                <li><a href="/" > HTML </a></li>
                <li><a href="/" > PHP </a></li>
                <li><a href="/" > CSS </a></li>
                <li><a href="/" > Javascript </a></li>
                <li><a href="/" > Wordpress </a></li>
              </ul>
            </div>
            <div className="job-status-bar">
              <ul className="like-com">
                <li>
                  <a href="/"> <i className="fas fa-heart"></i> Like {likes} </a>
                  <img src={IconLike} alt="" /> 
                </li>
                <li>
                  <a href="/" className="com">
                    <i className="fas fa-comment-alt"></i> Comment {comments.length}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <PostCommments/>
        </div>

        <div className="process-comm">
        </div>
      </div>
    </div>
  );
}
 
export default SinglePost ;
