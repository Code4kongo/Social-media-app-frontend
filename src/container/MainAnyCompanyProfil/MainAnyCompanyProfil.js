import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CompanySocialMediaLink from '../../components/AnySocialMediaLink/SocialMediaLink'
import CompanyFeed from '../../components/AnyUserFeed/AnyUserFeed'
import CompanyInfo from '../../components/AnyUserInfo/AnyUserInfo'
import CompanyPortfolio from '../../components/AnyUserPortfolio/AnyUserPortfolio'
import UserCover from '../../images/resources/cover-img.jpg'
import FeedIcon from '../../images/ic1.png'
import InfoIcon from '../../images/ic2.png'
import PortfolioIcon from '../../images/ic3.png'


const MainCompanyProfil = (props) => {

    const companyId = props.match.params.companyId

    const [ companyDetails, setCompanyDetails ] = useState({
        _id : "",
        company : "",
        picture : "",
        country : "",
        createdAt : "",
        email : "",
        phone : "",
        address : "",
        about : "",
        registered : "",
    })
    const [ companyInfo, setCompanyInfo ] = useState({
        overview : "",
        awards : ""
    }) 
    const [ companySkills, setCompanySkills] = useState([])
    const [ companyPortfolio, setCompanyPortfolio] = useState([])
    const [ companySocialmedialink, setCompanySocialmedialink] = useState([])

    const [ feedToggle, setFeedToggle ] = useState(false)
    const [ infoToggle, setInfoToggle ] = useState(false)
    const [ portfolioToggle, setPortfolioeedToggle ] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/company/${companyId}`)
            .then(res => {
                const result = res.data.company
                const { _id, company, picture, country, createdAt, email,  phone,  address,  about, registered, info, skills,portfolio,socialmedialink} = result
                const { overview, awards } = info
                
                setCompanyDetails(() => ( { ...companyDetails, _id,company, picture,country,createdAt,email, phone, address, about, registered}))
                setCompanyInfo(() => ( { ...companyInfo, overview, awards } ))
                setCompanyPortfolio(portfolio)
                setCompanySkills(skills)
                setCompanySocialmedialink(socialmedialink)    
            })
    },[])
    const showFeed = () => {
        setFeedToggle(true)
        setInfoToggle(false)
        setPortfolioeedToggle(false)
    }
    const showInfo = () => {
        setFeedToggle(false)
        setInfoToggle(true)
        setPortfolioeedToggle(false)
    }
    const showPortfolio = () => {
        setFeedToggle(false)
        setInfoToggle(false)
        setPortfolioeedToggle(true)
    }
    
    return (
        <React.Fragment>
            <section className="cover-sec">
                <img src={UserCover} alt=""/>
                <div className="add-pic-box">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-12 col-sm-12">								
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
                                <CompanySocialMediaLink 
                                        socialmedialink = { companyDetails.companySocialmedialink } 
                                        picture = { companyDetails.picture }
                                        country = { companyDetails.country }
                                        email = { companyDetails.email }
                                        phone = { companyDetails.phone }
                                        address = { companyDetails.address }
                                />
    
                            <div className="col-lg-9">
                            <div className="main-ws-sec">
    
                                <div className="user-tab-sec rewivew">
                                        <h3> { companyDetails.company}</h3>
                                        <div className="star-descp">
                                            <span>Established : { companyDetails.createdAt }</span>
                                        </div>
                                        
                                        <div className="tab-feed st2 settingjb">
                                            <ul>
                                            <li data-tab="feed-dd" className="active" onClick={showFeed}>
                                                <img src={FeedIcon} alt="" />
                                                <span>Feed</span>
                                            </li>
                                            <li data-tab="info-dd" onClick={showInfo}>
                                                <img src={InfoIcon} alt="" />
                                                <span>Info</span>
                                            </li>
                                            <li data-tab="portfolio-dd" onClick={showPortfolio}>
                                                <img src={PortfolioIcon} alt="" />
                                                <span>Portfolio</span>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                { 
                                    feedToggle ? <CompanyFeed/> : 
                                    infoToggle  ? <CompanyInfo 
                                                        overview={ companyInfo.overview }
                                                        awards = { companyInfo.awards }
                                                        skills = { companySkills }
                                                        location = { companyDetails.address }
                                                        country = { companyDetails.country}
                                                        /> : 
                                    portfolioToggle ? <CompanyPortfolio/> :
                                    <CompanyFeed/>
                                }
                                
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
