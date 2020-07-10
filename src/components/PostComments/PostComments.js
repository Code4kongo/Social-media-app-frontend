import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from '../Comment/Comment'
const  PostCommments = props => {
  
  const { postId } = props 
  const [ comments, setComments ] = useState([
            {
              _id : "",
              author : "",
              content : "",
              date : "",
              email : "",
              post : ""
            }
        ])
  const [commentAuthor, setCommentAuthor ] = useState("code4kongo") // to be set by the connected user
  const [commentEmail, setCommentEmail ] = useState("code4kongo@gmail.com")
  const [commentContent, setCommentContent ] = useState("")
  
  
  const hanldeCommentSubmit = event => {
    event.preventDefault()

    const newObject =  {
            author : commentAuthor,
            content : commentContent,
            email : commentEmail,
            post : postId
    }

    axios.post('http://localhost:8080/comments', newObject)
          .then(res => {
            console.log(res.data.createdcomment, "Comment added")
          })
          .catch(error => {
            console.log(error)
          })
}

  useEffect(() =>{ 
        axios.get(`http://localhost:8080/posts/comments/${postId}`)
             .then(res => {
                  const newComments = res.data.comments
                  setComments(newComments)
             })
  }, [])

  
    
  return (
    <div className="comment-section">
      <p className="plus-ic">
        <i className="la la-plus"></i>
      </p>
      <div className="comment-section">
          <div className="comment-sec">
      {
        comments.map((comment,index) => {
          return <Comment key={index}
                          author = { comment.author }
                          content = { comment.content }
                          date = { comment.date }
                          email = { comment.email }
                 />
        })
      }
          </div>
      </div>

      <div className="post-comment">
        <div className="cm_img">
          <img src="images/resources/bg-img4.png" alt="" />
        </div>
        <div className="comment_box">
          <form onSubmit={hanldeCommentSubmit}>
            <input type="text" placeholder="Post a comment" onChange={ event => setCommentContent(event.target.value)} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
  </div>
  );
}
 
export default PostCommments ;
