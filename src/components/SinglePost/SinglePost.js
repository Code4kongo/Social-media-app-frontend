import React, { useState } from "react";
import "./SinglePost.css";
import IconMeedia from '../../images/icon8.png'
import IconCountry from '../../images/icon9.png'
import IconLike from '../../images/liked-img.png'
import IconUs from '../../images/resources/us-pc2.png'
import IconClock from '../../images/clock.png'
import PostCommments from "../PostComments/PostComments";
import axios from 'axios'

const  SinglePost = props => {
  let { _id, title, country, author, content, date, likes, userDetails, companyDetails, postImage  } = props

  const image = `http://localhost:8080/${postImage}`

  console.log(image)

  let commentAuthor = ""
  let commentEmail = ""

  if(userDetails.email === ""){
    commentAuthor = companyDetails.company_name
    commentEmail = companyDetails.company_email
  }else {
    commentAuthor = userDetails.name
    commentEmail = userDetails.email
  }
  
  const postId = _id
  
  const [ showComment, setShowComment ] = useState(false)
  const [likeAction, setLikeAction ] = useState(likes)

  const toggleShowComment = () => {
    setShowComment(!showComment)

  }

  const updateLike = (event) => {
    event.preventDefault()
    const newPostObject = {
      likes : likeAction
    }
    axios.patch(`http://localhost:8080/posts/${postId}`, newPostObject)
          .then(res => {
            console.log(res.data)
          })
          .catch(error => {
            console.log(error)
          })
  }
  return (
    <div>
      <div className="posts-section">
        <div className="posty">
          <div className="post-bar no-margin">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src={IconUs} alt=""/>
                <div className="usy-name">
                  <h3>{ author }</h3>
                  <span>
                    <img src={IconClock} alt="" />{date}
                  </span>
                </div>
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
            </div>
            <div className="job_descp">
              <h3> {title} </h3>
              <p>{content}</p>
              <img src={image} alt="image" width="100%" height="30%" style={{ margin : 'auto', marginBottom : '8%'}}/>
              <ul className="skill-tags">
                <li><a href="/" > HTML </a></li>
                <li><a href="/" > PHP </a></li>
                <li><a href="/" > CSS </a></li>
                <li><a href="/" > Javascript </a></li>
                <li><a href="/" > Wordpress </a></li>
              </ul>
            </div>
            <form className="job-status-bar" onSubmit={updateLike}>
              <ul className="like-com">
                <li>
                   <p onClick = { () => { setLikeAction(likes + 1 )}}>
                      <button type="submit" className="btn">
                        <i className="fas fa-heart"></i>
                        <i> { likeAction } </i>
                       <img src={IconLike} alt=""/>  
                      </button>  
                    </p>
                </li>
                <li>
                    <p onClick={toggleShowComment}>
                      <i className="fas fa-comment-alt"></i>
                      <i> show Comment  </i>
                    </p>
                </li>
              </ul>
            </form>
          </div>
          {
            showComment ? <PostCommments 
                              postId={ postId} 
                              commentEmail = { commentEmail}
                              commentAuthor = { commentAuthor}
                          /> : null
          }
        </div>

        <div className="process-comm">
        </div>
      </div>
    </div>
  );
}
 
export default SinglePost ;
