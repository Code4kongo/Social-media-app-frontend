import React, { Component } from 'react'
import Header from '../container/Header/Header'
import MainHome from '../container/MainHome/MainHome'
import Footer from '../container/Footer/Footer'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <MainHome />
                <Footer/>

            </React.Fragment>
        )
    }
}

export default Home
