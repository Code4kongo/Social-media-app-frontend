import React, { Component } from 'react'
import Header from '../container/Header'
import MainCompanies from '../container/MainCompaniesAndJobs'
import Footer from '../container/Footer'

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
