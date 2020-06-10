import React  from 'react'
import { Link } from 'react-router-dom'

const SingleJob = (props) => {
    let {address, applicants, author, content, country, date,email, jobType, overview, phone, salary, socialmedialink, title, total_employee, views  } = props
    return ( 
        <div>
            <div className="posty">
                <div className="post-bar no-margin">
                    <div className="post_topbar">
                        <div className="usy-dt">
                            <img src="images/resources/us-pc2.png" alt=""/>
                            <div className="usy-name">
                                <h3>{author}</h3>
                                <span><img src="images/clock.png" alt=""/> posted on : { date }</span>
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
                            <li><img src="images/icon8.png" alt=""/><span>{email}</span></li>
                            <li><img src="images/icon9.png" alt=""/><span> { country }</span></li>
                        </ul>
                        <ul className="bk-links">
                            <li><a href="/" title=""><i className="la la-bookmark"></i></a></li>
                            <li><a href="/" title=""><i className="la la-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div className="job_descp">
                        <h3>{title}</h3>
                        <ul className="job-dt">
                            <li><a href="/" title="">{jobType}</a></li>
                            <li><span>R{salary}</span></li>
                        </ul>
                        <p>{content} <a href="/">view more</a></p>
                        <ul className="skill-tags">
                            {
                                socialmedialink.map((socialLink,index) => {
                                    return <li key={index}><Link to={socialLink}> {socialLink} </Link></li>
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="job-status-bar">
                        <ul className="like-com">
                            <li>
                                <a href="/" className="active"> Like </a>
                            </li>
                            <li><a href="/" className="com"><i className="fas fa-eye"></i> view job</a></li>
                        </ul>
                        <a href="/"><i className="fas fa-eye"></i>{views}</a>
                    </div>
                </div>
            </div>
            <div className="process-comm">
                
            </div>
        </div>
     );
}
 
export default SingleJob ;




 