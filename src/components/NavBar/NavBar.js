import React, { Component } from 'react'
import HomeIcon from '../../images/icon1.png'
import CompanyIcon from '../../images/icon2.png'
import UserIcon from '../../images/icon4.png'
import JobIcon from '../../images/icon5.png'
import NotificationIcon from '../../images/icon7.png'
import UserAccount from '../UserAccount/UserAccount'

export class NavBar extends Component {
    render() {
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
                            <a href="/companies">
                                <span><img src={CompanyIcon} alt="companyIcon" /></span>
                                Companies
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span><img src={UserIcon} alt="UserIcon" /></span>
                                Users
                            </a>
                        </li>
                        <li>
                            <a href="/companies">
                                <span><img src={JobIcon} alt="homeIcon" /></span>
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a href="/" className="">
                                <span><img src={NotificationIcon} alt="NotifictaionIcon"/></span>
                                Notification
                            </a>
                        </li>

                    </ul>
                </nav>
                <div class="menu-btn">
                    <a href="/" title=""><i class="fa fa-bars"></i></a>
                </div>
                <div>
                   <UserAccount/>
                </div>
            </div>
        )
    }
}

export default NavBar
