import React from 'react'
import CompanySocialMediaLink from '../../components/SocialMediaLink/SocialMediaLink'
import CompanyFeed from '../../components/AnyUserFeed/AnyUserFeed'
import CompanyInfo from '../../components/AnyUserInfo/AnyUserInfo'
// import CompanyPortfolio from '../../components/UserPortfolio/UserPortfolio'
// import CompanyNotification from '../../components/UserNotification/UserNotification'
import UserCover from '../../images/resources/cover-img.jpg'
import FeedIcon from '../../images/ic1.png'
import InfoIcon from '../../images/ic2.png'


const MainCompanyProfil = () => {
    return (
        <React.Fragment>

    <section className="cover-sec">
        <img src={UserCover} alt=""/>
        <div className="add-pic-box">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-12 col-sm-12">					
                        <input type="file" id="file"/>
                        <label htmlFor="file">Change Image</label>				
                    </div>
                </div>
            </div>
        </div>
    </section>

    <main>
        <div className="main-section">
            <div className="container">
                <div className="main-section-data">
                    <div className="row">
                        <CompanySocialMediaLink />

                    <div className="col-lg-9">
                    <div className="main-ws-sec">

                        <div className="user-tab-sec rewivew">
                                <h3>John Doe</h3>
                                <div className="star-descp">
                                    <span>Graphic Designer at Self Employed</span>
                                </div>
                                
                                <div className="tab-feed st2 settingjb">
                                    <ul>
                                    <li data-tab="feed-dd" className="active">
                                        <a href="/" title="">
                                        <img src={FeedIcon} alt="" />
                                        <span>Feed</span>
                                        </a>
                                    </li>
                                    <li data-tab="info-dd">
                                        <a href="/" title="">
                                        <img src={InfoIcon} alt="" />
                                        <span>Info</span>
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                        <CompanyInfo />
                        <CompanyFeed />
                        <CompanyFeed />
                        <CompanyFeed />

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </React.Fragment>
    )
}
 
export default MainCompanyProfil;
