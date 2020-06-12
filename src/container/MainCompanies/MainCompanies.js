import React, { useState, useEffect } from 'react'
import SingleCompany from '../../components/SingleCompany/SingleCompany'
import axios from 'axios'

const MainCompaniesAndJobs = (props) => {

    const [ companiesDetails, setCompaniesDetails ] = useState([
        {
            _id : "",
            company : "",
            createdAt : "",
            phone : "",
            email : ""
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:8080/company')
            .then(res => {
                const companiesList = res.data.company
                setCompaniesDetails(companiesList)
            })
    }, [])


    return ( 
        <section className="companies-info">
            <div className="container">
                <SingleCompany companiesDetails={companiesDetails}/>
            </div>
        </section>
     );
}
 
export default MainCompaniesAndJobs ;
