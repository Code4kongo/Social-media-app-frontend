import React from 'react'
import HomeIcon from '../../images/icon1.png'
import CompanyIcon from '../../images/icon2.png'
import UserIcon from '../../images/icon4.png'
import JobIcon from '../../images/icon5.png'
import NotificationIcon from '../../images/icon7.png'
import AddJobIcon from '../../images/icon3.png'
import UserAccount from '../UserAccount/UserAccount'

const  NavBar = () => {
    return ( 
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <span><img src={HomeIcon} alt="homeIcon" /></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/post-job">
                            <span><img src={AddJobIcon} alt="jobIcon" /></span>
                            Post Job
                        </a>
                    </li>
                    <li>
                        <a href="/companies">
                            <span><img src={CompanyIcon} alt="companyIcon" /></span>
                            Companies
                        </a>
                    </li>
                    <li>
                        <a href="/users">
                            <span><img src={UserIcon} alt="UserIcon" /></span>
                            Users
                        </a>
                    </li>
                    <li>
                        <a href="/jobs">
                            <span><img src={JobIcon} alt="homeIcon" /></span>
                            Jobs
                        </a>
                    </li>
                    <li>
                        <a href="/my-profile" className="">
                            <span><img src={NotificationIcon} alt="NotifictaionIcon"/></span>
                            Notification
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="menu-btn">
                <a href="/" title=""><i className="fa fa-bars"></i></a>
            </div>
            <div>
                <UserAccount/>
            </div>
        </div>

     );
}
 
export default NavBar;