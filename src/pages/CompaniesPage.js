import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainCompanies from '../container/MainCompaniesAndJobs/MainCompaniesAndJobs'
import Footer from '../container/Footer/Footer'

export class Companies extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainCompanies/>
                <Footer/>
            </div>
        )
    }
}

export default Companies
