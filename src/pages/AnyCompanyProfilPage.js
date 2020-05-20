import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainAnyCopmany from "../container/MainAnyCompanyProfil/MainAnyCompanyProfil";
import Footer from '../container/Footer/Footer'

export class UserProfil extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainAnyCopmany />
                <Footer/>
            </div>
        )
    }
}

export default UserProfil
