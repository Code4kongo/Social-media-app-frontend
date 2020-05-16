import React, { Component } from 'react'
import UsersSocialMediaLinks from '../../components/SocialMediaLink/SocialMediaLink'
import UserFeed from '../../components/PersonalFeed/PersonalFeed'
import UserInfo from '../../components/PersonalInfo/PersonalInfo'


export class MainUserProfil extends Component {
    render() {
        return (
            <div style = {{backgroundColor : 'blue'}}>
                This is the user profil
                <UsersSocialMediaLinks/>
                <UserFeed/>
                <UserInfo/>
            </div>
        )
    }
}

export default MainUserProfil
