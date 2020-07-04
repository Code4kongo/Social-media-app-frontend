import React from 'react'
import ImageProfil from '../../images/resources/user-pic.png'
import './UserProfiction.css'
import { Link } from 'react-router-dom'
const UserProfiction = ({userDetails}) => {
    const { name, company, email, registered } = userDetails

    const style = {
        color: "#17a2b8"
    }


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
                    <small>{ company} </small>
                </div>
             </div>
            <ul className="user-fw-status">
                <li>
                    <h4>Email</h4>
                    <small><i>{email}</i></small>
                </li>
                <li>
                    <h4>registered</h4>
                    <small><i>{registered}</i></small>
                </li>
                <li>
                    <Link to="/my-profile" style={style}>View Profile</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default UserProfiction ;
