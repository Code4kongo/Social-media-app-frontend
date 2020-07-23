import React, { useState, useEffect } from 'react'
import IconEnvelop from '../../images/envelop.png'
import IconUser from '../../images/resources/user1.png'
import './UsersTopProfil.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const UsersAndCompanies = (props) => {

    const [ usersDetails, setUsersDetails ] = useState([
        {
            _id: "",
            name:"" ,
            company:"" ,
            email: "",
            phone: "",
            picture : ""
        }
    ])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:8080/user')
            .then(res => {
                const usersList = res.data.users
            })
    }, [])
    
    const userLists = usersDetails

    const [ currentUser , setCurrentUser ] = useState(userLists[0])

    console.log(currentUser)

    // const userpic = `http://localhost:8080/${currentUser.picture}`

    const prevUser = () => {

    }
    const NextUser = () => {

    }

    
    return (
                <div className="top-profiles">
                <div className="pf-hd">
                    <h3>Top Profiles</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>   
                
                    <div className="profiles-slider user-list">
                    <button className="btn btn-info"> previous</button> 
                        <div className="user-profy user-card" style={{width : "15rem", height : "16rem"}}>
                        {
                            "currentUser.picture"  === "" ? 
                                        <img src={IconUser} alt="" width="45%" height="40%" style={{borderRadius : "100%"}}/> : 
                                        <img src={"userpic"} alt="" width="45%" height="40%" style={{borderRadius : "100%"}}/>
                        }
                            <h3>{ "currentUser.name "}</h3>
                            <span>{ "currentUser.email" }</span>
                            <ul>
                                <li><a className="envlp"><img src={IconEnvelop} alt=""/></a></li>
                            </ul>
                            <Link to={`users/${"currentUser._id"}`} className="btn btn-info"> View Profile </Link>
                        </div>
                    </div>
                    <button className="btn btn-info"> previous</button> 
            </div>
       )
    
}

export default UsersAndCompanies