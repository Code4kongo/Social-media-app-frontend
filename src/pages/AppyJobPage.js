import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainApplyJob from '../container/MainApplyJob'
import Footer from '../container/Footer/Footer'


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
