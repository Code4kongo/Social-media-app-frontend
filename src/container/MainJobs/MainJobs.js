import React, { useContext, useState} from 'react'
import FilterJob from '../../components/FilterJob/FilterJob'
import SingleJob from '../../components/SingleJob/SingleJob'
import PostJobModal from '../../modals/PostJobModal/MainPostJobModal'
import TopJob from '../../components/TopJobs/TopJobs'
import MostViewed from '../../components/MostViewd/MostView'
import { JobContext } from '../../contexts/jobContext'
import UserPic from "../../images/resources/user-pic.png";


const  MainJobs = props => {

    const { email } = props.userDetails
    const { company_email } = props.companyDetails
    let  postingAuth = ""
  
    if(email === ""){
        postingAuth = company_email
    }
    const [showModal, setShowModal] = useState(false)
    const  { jobs, topJobs, mostViewed } = useContext(JobContext)

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    
    return (

        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <FilterJob/>
                            <div className="col-lg-6">
                                <div className="main-ws-sec">
                                    
                                { postingAuth !== "" ? <div className="post-topbar">
                                    <div className="user-picy">
                                        <img src={UserPic} alt="" />
                                    </div>
                                    <div className="post-st">
                                        <ul>
                                            <li>
                                                <button className="btn btn-outline-info" onClick={openModal}>
                                                    Post a Job
                                                </button>
                                            </li>
                                        </ul>
                                    </div> 
                                </div> : null}
                                <PostJobModal 
                                    showModal={showModal}
                                    closeModal={closeModal}
                                />

                                    <div className="posts-section">
                                        {
                                            jobs.map(job => {
                                                
                                                let { _id, address, applicants, author, content, country, date,email, jobType, overview, phone, salary, socialmedialink, title, total_employee, views  } = job
                                                return (
                                                        <SingleJob 
                                                            key={job._id}
                                                            id = { _id}
                                                            address = { address }
                                                            applicants = { applicants}
                                                            author = { author}
                                                            content = { content}
                                                            country = { country}
                                                            date = { date}
                                                            email = { email}
                                                            jobType  = { jobType}
                                                            overview = { overview}
                                                            phone = { phone}
                                                            salary = { salary}
                                                            socialmedialink = { socialmedialink}
                                                            title = { title}
                                                            total_employee = { total_employee}
                                                            views = { views}
                                                        />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3">
                            <div className="right-sidebar">
                                <TopJob topJobs={topJobs}/>
                                <MostViewed mostViewed={mostViewed}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainJobs

