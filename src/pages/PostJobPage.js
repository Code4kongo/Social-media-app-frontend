import React, { Component } from 'react'
import Header from '../container/Header/Header'
import PostJobContainer from '../container/MainPostJob/MainPostJob'
import Footer from '../container/Footer/Footer'

export class Jobs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PostJobContainer/>
                <Footer/>
            </div>
        )
    }
}

export default Jobs
