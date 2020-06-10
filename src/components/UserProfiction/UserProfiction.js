import React from 'react'
import ImageProfil from '../../images/resources/user-pic.png'
import './UserProfiction.css'
import { Link } from 'react-router-dom'
const UserProfiction = (props) => {
    const { name, company, email, registered } = props

    return ( 
        <div className="user-data full-width">
            <div className="user-profile">
                <div className="username-dt">
                    <div className="usr-pic">
                        <img src={ImageProfil} alt="myprofil"/>
                    </div>
                </div>
                <div className="user-specs">
                    <h3>{name}</h3>
                    <span>{ company} </span>
                </div>
             </div>
            <ul className="user-fw-status">
                <li>
                    <h4>Email</h4>
                    <span>{email}</span>
                </li>
                <li>
                    <h4>registered</h4>
                    <span>{registered}</span>
                </li>
                <li>
                    <Link to="/my-profile">View Profile</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default UserProfiction ;
