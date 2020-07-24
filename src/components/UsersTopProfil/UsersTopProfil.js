import React, { useState, useEffect } from 'react'
import IconEnvelop from '../../images/envelop.png'
import IconUser from '../../images/resources/user1.png'
import './UsersTopProfil.css'
import { Link } from 'react-router-dom'


const UsersAndCompanies = (props) => {

    const usersStorage = localStorage.getItem('users')
    const users = JSON.parse(usersStorage)

    const user1 = users[0]
    const user2 = users[1]
    const user3 = users[2]

    const topUsers = [ user1, user2, user3 ]

    const [ usersList , setUsersList ] = useState(topUsers)

    return (
                <div className="top-profiles">
                <div className="pf-hd">
                    <h3>Top Profiles</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>   
                
                    <div className="profiles-slider user-list">
                        {
                            topUsers.length < 1 ? null : 
                            topUsers.map((user, index ) => {
                                const userpic = `http://localhost:8080/${user.picture}`
                                return ( 
                                    <div className="user-profy user-card" style={{width : "15rem", height : "16rem"}} key={index}>
                                    {
                                        "currentUser.picture"  === "" ? 
                                                    <img src={IconUser} alt="" width="45%" height="40%" style={{borderRadius : "100%"}}/> : 
                                                    <img src={userpic} alt="" width="45%" height="40%" style={{borderRadius : "100%"}}/>
                                    }
                                        <h3>{ user.name }</h3>
                                        <span>{ user.email }</span>
                                        <ul>
                                            <li><a className="envlp"><img src={IconEnvelop} alt=""/></a></li>
                                        </ul>
                                        <Link to={`users/${user._id}`} className="btn btn-info"> View Profile </Link>
                                </div>
                                )
                            })
                        }
                    </div>
            </div>
       )
    
}

export default UsersAndCompanies