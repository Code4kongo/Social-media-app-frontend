import React, { Component } from 'react'
import ImageProfil from '../../images/resources/user-pic.png'
import './UserProfiction.css'

export class UserProfiction extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                <div className="main-left-sidebar no-margin">
                    <div className="user-data full-width">
                        <div className="user-profile">
                            <div className="username-dt">
                                <div className="usr-pic">
                                    <img src={ImageProfil} alt=""/>
                                </div>
                            </div>
                            <div className="user-specs">
                                <h3>John Doe</h3>
                                <span>Graphic Designer at Self Employed</span>
                            </div>
                        </div>
                        <ul className="user-fw-status">
                            <li>
                                <h4>Following</h4>
                                <span>34</span>
                            </li>
                            <li>
                                <h4>Followers</h4>
                                <span>155</span>
                            </li>
                            <li>
                                <a href="/" title="">View Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfiction
