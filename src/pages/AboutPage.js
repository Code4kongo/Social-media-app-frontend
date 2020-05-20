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
                <div class="video">
                <iframe className="video-iframe"  src="https://www.youtube.com/embed/jzCwiu22C_c" ></iframe>
            </div>
                <Footer />
            </div>
        )
    }
}

export default AboutPage
