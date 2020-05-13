import React, { Component } from 'react'
import './UserAccount.css'
import UserIcon from '../../images/resources/user.png'

export class UserAccount extends Component {
    render() {
        return (
            <div class="user-account">
            <div class="user-info">
                <img src={UserIcon} alt="UserIcon"/>
                <a href="/" title="">John</a>
                <i class="la la-sort-down"></i>
            </div>
            <div class="user-account-settingss" id="users">
                <h3>Online Status</h3>
                <ul class="on-off-status">
                    <li>
                        <div class="fgt-sec">
                            <input type="radio" name="cc" id="c5"/>
                            <label for="c5">
                                <span></span>
                            </label>
                            <small>Online</small>
                        </div>
                    </li>
                    <li>
                        <div class="fgt-sec">
                            <input type="radio" name="cc" id="c6"/>
                            <label for="c6">
                                <span></span>
                            </label>
                            <small>Offline</small>
                        </div>
                    </li>
                </ul>
                <h3>Custom Status</h3>
                <div class="search_form">
                    <form>
                        <input type="text" name="search"/>
                        <button type="submit">Ok</button>
                    </form>
                </div>
                <h3>Setting</h3>
                <ul class="us-links">
                    <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                    <li><a href="/" title="">Privacy</a></li>
                    <li><a href="/" title="">Faqs</a></li>
                    <li><a href="/" title="">Terms & Conditions</a></li>
                </ul>
                <h3 class="tc"><a href="sign-in.html" title="">Logout</a></h3>
            </div>
        </div>
        )
    }
}

export default UserAccount
