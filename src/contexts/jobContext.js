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

    const addJob = () => {

    }
    const updateJob = () => {
        
    }
    const deleteJob = () => {
        
    }
    
    return ( 
        <JobContext.Provider value={{jobs, topJobs, mostViewed}}>
            {props.children}
        </JobContext.Provider>
     );
}
 
export default JobContextProvider;