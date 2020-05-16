import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainJobs from '../container/MainJobs/MainJobs'
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
