import React, { useState, useEffect} from 'react'
import IconCountry from '../../images/icon9.png'
import IconLike from '../../images/liked-img.png'
import IconClock from '../../images/clock.png'
import { Link } from 'react-router-dom'
import IconUser from '../../images/resources/us-pc2.png'
import axios from 'axios'

const Userjobs = (props) => {

 const { email } = props 
 
const [jobs, setJobs] = useState([
    {
      _id: "",
      title: "",
      jobType: "",
      salary: 0,
      views: 0,
      country: "",
      author: "",
      email: "",
      phone: "",
      content: "",
      overview: "",
      total_employee: 0,
      date: "",
      address: "",
      applicants: 0,
      socialmedialink: [],
    }
  ])
  const [loading , setLoading] = useState(true)

  useEffect(() => {

    axios.get(`http://localhost:8080/jobs/my-jobs?email=${email}`) 
          .then(res => {
            console.log(res)
            const fetchedJobs = res.data.jobs
            setJobs(fetchedJobs)
            setLoading(false)
          })

  }, [])

  if(loading){
    return <div>loading ...</div>
  }else {
    return (
      jobs.map(job => {
        return (
          <div key={job._id}>
          <div className="posty">
              <div className="post-bar no-margin">
                  <div className="post_topbar">
                      <div className="usy-dt">
                          <img src={IconUser} alt=""/>
                          <div className="usy-name">
                              <h3>{job.author}</h3>
                              <span><img src={IconClock} alt=""/> posted on : { job.date }</span>
                          </div>
                      </div>
                      <div className="ed-opts">
                          <a href="/" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                          <ul className="ed-options">
                              <li><a href="/" title="">Edit Post</a></li>
                              <li><a href="/" title="">Unsaved</a></li>
                              <li><a href="/" title="">Unbid</a></li>
                              <li><a href="/" title="">Close</a></li>
                              <li><a href="/" title="">Hide</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="epi-sec">
                      <ul className="descp">
                          <li><img src={IconCountry} alt=""/><span> { job.country }</span></li>
                      </ul>
                  </div>
                  <div className="job_descp">
                      <h3>{job.title}</h3>
                      <ul className="job-dt">
                          <li><a href="/jobs" title="">{job.jobType}</a></li>
                          <li><span>R {job.salary}</span></li>
                      </ul>
                      <p>
                          {job.content}
                      </p>
                      <ul className="skill-tags">
                          {
                              job.socialmedialink.map((socialLink,index) => {
                                  return <li key={index}><Link to={socialLink}> {socialLink} </Link></li>
                              })
                          }
                      </ul>
                  </div>
                  <div className="job-status-bar">
                      <ul className="like-com">
                          <li> <img src={IconLike} alt="liked"/> </li>
                          <li> <i className="fas fa-eye"> {job.views} </i> </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="process-comm">
              
          </div>
      </div>
        )
      })
    )
  }
}
 
export default Userjobs;







 