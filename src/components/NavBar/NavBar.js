import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../../images/icon1.png'
import CompanyIcon from '../../images/icon2.png'
import UserIcon from '../../images/icon4.png'
import MessageIcon from '../../images/icon6.png'
import JobIcon from '../../images/icon5.png'
import NotificationIcon from '../../images/icon7.png'
import UserAccount from '../UserAccount/UserAccount'


const  NavBar = () => {
    return ( 
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">   
                            <span><img src={HomeIcon} alt="homeIcon"/></span>  Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/companies">
                            <span><img src={CompanyIcon} alt="companyIcon" /></span> Companies
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <span><img src={UserIcon} alt="UserIcon" /></span> Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/jobs">
                            <span><img src={JobIcon} alt="homeIcon" /></span>  Jobs
                        </Link>
                    </li>
                    {
                    // <li>
                    //     <Link to="/messages">
                    //         <span><img src={MessageIcon} alt="messageIcon" /></span>  Messages
                    //     </Link>
                    // </li>
                    }
                    <li>
                        <Link to="/my-profile" className="">
                            <span><img src={NotificationIcon} alt="NotifictaionIcon"/></span> Notification
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="menu-btn">
                <Link to="/"><i className="fa fa-bars"></i></Link>
            </div>
            <div>
                <UserAccount/>
            </div>
        </div>

     );
}
 
export default NavBar;