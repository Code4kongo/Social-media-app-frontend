import React, { useState, useEffect } from 'react'
import SingleUser from '../../components/SingleUser/SingleUser'
import axios from 'axios'

const MainCompaniesAndJobs = (props) => {

    const [ usersDetails, setUsersDetails ] = useState([
        {
            _id: "",
            name:"" ,
            company:"" ,
            email: "",
            phone: ""
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:8080/user')
            .then(res => {
                const usersList = res.data.users
                setUsersDetails(usersList)
            })
    }, [])

    return ( 
        <section className="companies-info">
            <div className="container">
                <SingleUser usersDetails={usersDetails}/>
            </div>
        </section>
     );
}
 
export default MainCompaniesAndJobs ;
