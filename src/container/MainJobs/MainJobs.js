import React, { useContext} from 'react'
import FilterJob from '../../components/FilterJob/FilterJob'
import SingleJob from '../../components/SingleJob/SingleJob'
import PostJob from '../../components/PostJob/PostJob'
import TopJob from '../../components/TopJobs/TopJobs'
import MostViewed from '../../components/MostViewd/MostView'
import { JobContext } from '../../contexts/jobContext'


function MainJobs() {
    const  { jobs, topJobs, mostViewed } = useContext(JobContext)
    
    return (

        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <FilterJob/>
                            <div className="col-lg-6">
                                <div className="main-ws-sec">
                                    <PostJob />
                                    <div className="posts-section">
                                        {
                                            jobs.map(job => {
                                                
                                                let {address, applicants, author, content, country, date,email, jobType, overview, phone, salary, socialmedialink, title, total_employee, views  } = job
                                                return (
                                                    <div>
                                                        <SingleJob 
                                                            key={job._id}
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
                                                    </div>
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

