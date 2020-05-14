import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainUserProfil from '../container/MainUserProfil'
import Footer from '../container/Footer/Footer'

export class UserProfil extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainUserProfil/>
                <Footer/>
            </div>
        )
    }
}

export default UserProfil
