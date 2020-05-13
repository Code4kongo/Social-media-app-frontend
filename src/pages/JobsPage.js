import React, { Component } from 'react'
import Header from '../container/Header'
import MainJobs from '../container/MainCompaniesAndJobs'
import Footer from '../container/Footer'

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
