import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ApplyJobSideBar from '../../components/ApplyJobSideBar/ApplyJobSideBar'
import ApplyJobHeader from '../../components/ApplyJobHeader/ApplyJobHeader'
import IconUser from '../../images/resources/us-pc2.png'
import IconClock from '../../images/clock.png'
import IconEmai from '../../images/icon8.png'
import IconCountry from '../../images/icon9.png'


const MainApplyJob = (props) => {

    let jobId = props.jobId
    const [job, setJob] = useState({
        _id: "",
        title: "",
        applicants: 0,
        jobType: "",
        salary: 0,
        views : 0,
        country: "",
        author: "",
        email: "",
        phone: "",
        content: "",
        date: " ",
        address: "",
        socialmedialink : [],
        overview : "",
        total_employee : 0,
        
    })

    useEffect(() => {
       axios.get(`http://localhost:8080/jobs/${jobId}`)
            .then(res => {
                const fetchedJob = res.data.job
                const { _id, title, applicants,    jobType, salary, views , country, author, email, phone, content, date, address, socialmedialink, overview , total_employee  } = fetchedJob
                setJob((job) => {
                   return { ...job, _id,  title, applicants,    jobType, salary, views , country, author, email, phone, content, date, address, socialmedialink, overview , total_employee }
                })                
            })
    }, [])

    return ( 
        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">  
                            <div className="col-xl-9 col-lg-9 col-md-12">         
                                <ApplyJobHeader 
                                        applicants = {job.applicants}
                                        jobType = {job.jobType}
                                        salary = {job.salary}
                                        views = {job.views}
                                        date = {job.date}
                                        total_employee= {job.total_employee}
                                        address= {job.address}
                                        overview= {job.overviewoverview}
                                />
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
                                        </div>
                                        <div className="epi-sec">
                                            <ul className="descp">
                                                <li><img src={IconEmai} alt=""/><span>{job.email}</span></li>
                                                <li><img src={IconCountry} alt=""/><span> { job.country }</span></li>
                                            </ul>
                                            <ul className="bk-links">
                                                <li><Link to={'/gmail.com'}><i className="la la-envelope"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="job_descp">
                                            <h3>{job.title}</h3>
                                            <ul className="job-dt">
                                                <li><Link to={'/jobs'}>{job.jobType}</Link></li>
                                                <li><span>R{job.salary}</span></li>
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
                                                <li><Link to={'/jobs'} className="active"> Like </Link> </li>
                                                <li><Link to={'/jobs'} className="com"><i className="fas fa-eye"></i> view job</Link></li>
                                            </ul>
                                            <Link to={"/jobs"}><i className="fas fa-eye"></i>{job.views}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                            <ApplyJobSideBar
                                jobId={jobId}
                                country={job.country}
                                total_employee={job.total_employee}
                                socialmedialink={job.socialmedialink}
                                email={job.email}
                                address={job.address}
                                phone={job.phone}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default  MainApplyJob;
