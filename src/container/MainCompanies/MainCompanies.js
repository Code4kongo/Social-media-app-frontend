import React, { useState, useEffect } from 'react'
import SingleCompany from '../../components/SingleCompany/SingleCompany'
import LoadingSpinner from '../../feedback/LoadingSpinner/LoadingSpinner'
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
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/company')
            .then(res => {
                const companiesList = res.data.company
                setCompaniesDetails(companiesList)
                setLoading(true)
            })
    }, [])


    return ( 
        <section className="companies-info">
            <div className="container">
                { !loading ? <LoadingSpinner /> : <SingleCompany companiesDetails={companiesDetails}/>}
            </div>
        </section>
     );
}
 
export default MainCompaniesAndJobs ;
