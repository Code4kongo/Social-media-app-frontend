import React, { Component } from 'react'
import './MainHome.css'
import CompanySocialMediaLink from '../components/SocialMediaLink/SocialMediaLink'
import CompanyFeed from '../components/PersonalFeed/PersonalFeed'
import CompanyInfo from '../components/PersonalInfo/PersonalInfo'

export class MainCompanyProfil extends Component {
    render() {
        return (
            <main style = {{backgroundColor : 'blue'}}>
                <div class="main-section">
                    <div class="container">
                        <div class="main-section-data">
                            <div class="row">

                                <CompanySocialMediaLink/>
                                <CompanyFeed/>
                                <CompanyInfo/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainCompanyProfil
