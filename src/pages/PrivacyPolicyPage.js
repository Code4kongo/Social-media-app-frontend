import React, { Component } from 'react'
import Header from '../container/Header'
import WebsiteInfoContainer from '../container/WebSiteInfoContainer'
import Footer from '../container/Footer'

export class PrivacyPolicyPage extends Component {
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

export default PrivacyPolicyPage