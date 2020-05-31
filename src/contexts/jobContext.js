import React, { createContext, useState } from 'react';
// import jobData from '../data/JobsData'

export const JobContext = createContext()

const JobContextProvider = (props) => {
    const [jobs, setJobs] = useState([
        {
                id: "1",
                title: "job 1",
                applicants: 1,
                jobType: "full-time",
                salary: 110,
                views : 10,
                country: "RDC",
                author: "jordy tshibss",
                email: "jordy@test.com",
                phone: "08768778",
                content: "new jobs ",
                date: "today ",
                address: "rerief street",
                "info": [
                  {overview : "nice job available ",
                  total_employee : 575184,
                  socialmedialink : ["facebook, twitter, insta"]}
                ]  
        }
    ])
    
    return ( 
        <JobContext.Provider value={{jobs }}>
            {props.children}
        </JobContext.Provider>
     );
}
 
export default JobContextProvider;