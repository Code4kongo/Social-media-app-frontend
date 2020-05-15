import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainUsers from '../container/MainCompaniesAndJobs/MainCompaniesAndJobs'
import Footer from '../container/Footer/Footer'

export class Users extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainUsers/>
                <Footer/>
            </div>
        )
    }
}

export default Users
