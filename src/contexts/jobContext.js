import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const JobContext = createContext()

let jobObject = {
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
}

const JobContextProvider = (props) => {
    const [jobs, setJobs] = useState([jobObject])
    const [topJobs , setTopJobs] = useState([jobObject])
    const [mostViewed, setMostViewed] = useState([jobObject])

    useEffect(() => {
        axios.get('http://localhost:8080/jobs')
            .then(res => {
                    const jobList = res.data.jobs
                    setJobs(jobList)

                    const sortedTopJobs = jobList.sort((a, b) => (a.salary < b.salary) ? 1 : -1)
                    const topJobsList = sortedTopJobs.slice(0, 5)
                    setTopJobs(topJobsList)

                    const sortedMostViewed = jobList.sort((a, b) => (a.views < b.views) ? 1 : -1)
                    const MostViewedJobsList = sortedMostViewed.slice(0, 5)
                    setMostViewed(MostViewedJobsList)
            })

    }, [])

    const addJob = (title, applicants, jobType,salary,views, country, author, email, phone, content, address,overview , total_employee) => {

        const newJob = { 
            title, 
            applicants, 
            jobType, salary, 
            views, 
            country, author, email, phone, content, address, overview , total_employee,
        }
        axios.post('http://localhost:8080/jobs', newJob)
            .then(res => {
                console.log(res)
            })
    }
    const updateJob = (jobId,job_title, job_jobType, job_salary, job_country, job_author, job_email, job_phone, job_content, job_address,job_overview , job_total_employee) => {
        
        
        const updatedJob = { 
            title : job_title, 
            jobType : job_jobType, 
            salary : job_salary, 
            country : job_country,
            author : job_author,
            email : job_email,
            phone : job_phone,
            content : job_content,
            address : job_address,
            overview : job_overview,
            total_employee : job_total_employee
        }
        console.log(updatedJob)

        axios.patch(`http://localhost:8080/jobs/${jobId}`, updatedJob)
             .then(res => {
                const message = res.data.job
                console.log(message)
                
             })
             .catch(error => {
                 console.log(error)
             })
    }
    const deleteJob = () => {
        
    }
    
    return ( 
        <JobContext.Provider value={{jobs, topJobs, mostViewed, addJob, updateJob, deleteJob }}> 
            {props.children}
        </JobContext.Provider>
     );
}
 
export default JobContextProvider;