import React, { Component } from 'react'
import Header from '../container/Header/Header'
import WebsiteInfoContainer from '../container/WebSiteInfoContainer/WebSiteInfoContainer'
import Footer from '../container/Footer/Footer'

export class AboutPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <WebsiteInfoContainer/>
                <Footer />
            </div>
        )
    }
}

export default AboutPage
