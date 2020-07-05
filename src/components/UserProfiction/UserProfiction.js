import React from 'react'
import ImageProfil from '../../images/resources/user-pic.png'
import './UserProfiction.css'
import { Link } from 'react-router-dom'


const UserProfiction = ({userDetails, companyDetails}) => {

    const { name, company, email, registered } = userDetails
    const { company_name, company_email, company_registered } = companyDetails
    
    const style = {
        color: "#17a2b8"
    }
    const userProfiction = (
        <div className="user-data full-width">
            <div className="user-profile">
                <div className="username-dt">
                    <div className="usr-pic">
                        <img src={ImageProfil} alt="myprofil"/>
                    </div>
                </div>
                <div className="user-specs">
                    <h5>{name}</h5>
                    <small>{ company} </small>
                </div>
            </div>
            <ul className="user-fw-status">
                <li>
                    <h6>Email</h6>
                    <br></br>
                    <small><i>{email}</i></small>
                </li>
                <li>
                    <h6>registered</h6>
                    <br></br>
                    <small><i>{registered}</i></small>
                </li>
                <li>
                    <Link to="/my-profile" style={style}>View Profile</Link>
                </li>
            </ul>
        </div>
    )
    const companyProfiction = (
        <div className="user-data full-width">
                <div className="user-profile">
                <div className="username-dt">
                    <div className="usr-pic">
                        <img src={ImageProfil} alt="myprofil"/>
                    </div>
                </div>
                <div className="user-specs">
                    <h5>{name}</h5>
                    <small>{ company_name} </small>
                </div>
             </div>
            <ul className="user-fw-status">
                <li>
                    <h6>Email</h6>
                    <br></br>
                    <small><i>{company_email}</i></small>
                </li>
                <li>
                    <h6>registered</h6>
                    <br></br>
                    <small><i>{company_registered}</i></small>
                </li>
                <li>
                    <Link to="/company-profil" style={style}>View Profile</Link>
                </li>
            </ul>
        </div>
    )
    
    if(email === ""){
        return companyProfiction
    }else {
        return userProfiction
    }

}
 
export default UserProfiction ;
