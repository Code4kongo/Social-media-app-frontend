import React, { useState, useContext } from "react";
import "./MainHome.css";
import UserProfiction from "../../components/UserProfiction/UserProfiction";
import PostJob from "../../modals/AddPostModal/AddPostModal"
import SinglePost from "../../components/SinglePost/SinglePost";
import TopJobs from "../../components/TopJobs/TopJobs";
import MostViewed from "../../components/MostViewd/MostView";
import { JobContext } from '../../contexts/jobContext'
import { PostContext } from "../../contexts/postContext";
import UserPic from "../../images/resources/user-pic.png";
import LoadingSpinner from "../../feedback/LoadingSpinner/LoadingSpinner";


const Main = ({userDetails, companyDetails}) => {

  const  { topJobs, mostViewed, loadingTopJobs, loadingMostViewed } = useContext(JobContext)
  const { posts, loadingPost } = useContext(PostContext)
  const postsLists = posts.reverse()

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  
  return (
    <main className="main-section">
      <div className="container">
        <div className="main-section-data">
          <div className="row">
            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
              <div>
                <UserProfiction  
                      userDetails={userDetails}
                      companyDetails={companyDetails} />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 no-pd">
              <div className="main-ws-sec">
                  <div className="post-topbar">
                            <div className="user-picy">
                                <img src={UserPic} alt="" />
                            </div>
                            <div className="post-st">
                                <ul>
                                    <li>
                                        <button className="btn btn-outline-info" onClick={openModal}>
                                            Post
                                        </button>
                                    </li>
                                </ul>
                            </div>
                    </div>
                                <PostJob 
                                    showModal={showModal}
                                    closeModal={closeModal}
                                    userDetails={userDetails}
                                    companyDetails={companyDetails}
                                />
                {
                 !loadingPost ? <LoadingSpinner/> :  postsLists.map(post => {
                    let {  _id, title, country, author, content, date, likes, comments, postImage } = post
                    return (
                      <SinglePost 
                            key={post._id}
                            _id = {_id}
                            title={title}
                            country = {country}
                            author = {author}
                            content = {content}
                            date = { date}
                            likes = { likes}
                            comments = {comments}
                            postImage = {postImage}
                      />
                    )
                  })
                }
              </div>
            </div>
            <div className="col-lg-3 pd-right-none no-pd">
              <div className="right-sidebar">
                  <TopJobs topJobs={topJobs} loadingTopJobs={loadingTopJobs}/>
                  <MostViewed mostViewed={mostViewed} loadingMostViewed={loadingMostViewed}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default Main;
