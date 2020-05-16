import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainJobs from '../container/MainCompaniesAndJobs/MainCompaniesAndJobs'
import Footer from '../container/Footer/Footer'

export class Jobs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainJobs/>
                <Footer/>
            </div>
        )
    }
}

export default Jobs
