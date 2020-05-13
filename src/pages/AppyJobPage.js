import React, { Component } from 'react'
import Header from '../container/Header'
import MainApplyJob from '../container/MainApplyJob'
import Footer from '../container/Footer'


export class AppyJob extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainApplyJob/>
                <Footer/>
            </div>
        )
    }
}

export default AppyJob
