import React, { useState, useEffect} from 'react'
import IconMeedia from '../../images/icon8.png'
import IconCountry from '../../images/icon9.png'
import IconLike from '../../images/liked-img.png'
import IconUs from '../../images/resources/us-pc2.png'
import IconClock from '../../images/clock.png'
import PostCommments from "../PostComments/PostComments";
import axios from 'axios'
// import { Link } from "react-router-dom";

const AnyCompanyFeed = (props) => {

  const { email } = props
  
  const [posts, setPosts] = useState([
    {
        _id:"",
        title: "",
        country: "",
        author: "",
        content: "",
        date: "",
        likes: 0,
        comments: [],
        postImage: ""
    }
  ])
  const [loading , setLoading] = useState(true)

  const [ showComment, setShowComment ] = useState(false)

  const toggleShowComment = () => {
    setShowComment(!showComment)
  }

  useEffect(() => {

    axios.get(`http://localhost:8080/posts/users/${email}`)
          .then(res => {
            const fetchedPosts = res.data.posts
            setPosts(fetchedPosts)
            setLoading(false)
          })

  }, [])

  if(loading){
    return <div>loading ...</div>
  }else {
    return (
      <div>
        {
          posts.map((post, index) => {
            return (
              <div className="posts-section" key={index}>
                <div className="posty">
                  <div className="post-bar no-margin">
                    <div className="post_topbar">
                      <div className="usy-dt">
                        <img src={IconUs} alt=""/>
                        <div className="usy-name">
                          <h3>{ post.author }</h3>
                          <span>
                            <img src={IconClock} alt="" />{post.date}
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
                          <span>{ post.country }</span>
                        </li>
                      </ul>
                      <ul className="bk-links">
                        <li>
                          <a href="/" ><i className="la la-envelope"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div className="job_descp">
                      <h3> {post.title} </h3>
                      <p>{post.content}</p>
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
                           <p><i className="fas fa-heart"></i> Like {post.likes}
                            <img src={IconLike} alt="" /> </p>
                        </li>
                        <li >
                            <p onClick={toggleShowComment}><i className="fas fa-comment-alt"></i> show Comment </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {
                    showComment ? <PostCommments postId={post._id} /> : null
                  }
                </div>
        
                <div className="process-comm">
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }

  
}
 
export default AnyCompanyFeed;
