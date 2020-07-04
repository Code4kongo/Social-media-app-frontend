import React, { useState, useEffect } from "react";
import axios from 'axios'
import UsersSocialMediaLinks from "../../components/UserSocialMediaLink/SocialMediaLink";
import UserFeed from "../../components/AnyUserFeed/AnyUserFeed";
import UserInfo from "../../components/AnyUserInfo/AnyUserInfo";
import UserJob from "../../components/UserJob/UserJob";
import UserNotification from "../../components/UserNotification/UserNotification";
import UserPortfolio from "../../components/UserPortfolio/UserPortfolio";
import UpdateUserModal from '../../modals/UpdateUserModal/UpdateUserModal'
import UserCover from '../../images/resources/cover-network.jpeg'
import FeedIcon from '../../images/ic1.png'
import InfoIcon from '../../images/ic2.png'
import PortfolioIcon from '../../images/ic3.png'
import NotificationIcon from '../../images/review.png'
import JobIcon from '../../images/ic6.png'


const MainUserProfil = ({userDetails}) => {

    // const userId = userDetails._id
    const userId = "5eddcb2ed45871082f32d358"
    const [ userInfo, setUserInfo ] = useState({
        overview : "",
        experience : ""
    }) 
    const [ userEducation, setUserEducation] = useState("")
    const [ userSkills, setUserSkills] = useState([])
    const [ userPortfolio, setUserPortfolio] = useState([])
    const [ userSocialmedialink, setUserSocialmedialink] = useState([])

    const [ feedToggle, setFeedToggle ] = useState(false)
    const [ infoToggle, setInfoToggle ] = useState(true)
    const [ portfolioToggle, setPortfolioeedToggle ] = useState(false)
    const [ notificationToggle, setNotificationToggle ] = useState(false)
    const [ jobToggle, setJobToggle ] = useState(false)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
      setShowModal(true)
    }
    const closeModal = () => {
      setShowModal(false)
    }


    useEffect(() => {
        axios.get(`http://localhost:8080/user/${userId}`)
            .then(res => {

                let user = res.data.user
                const { education } = user
                const { overview, experience } = user.info
                const { skills } = user
                const { portfolio } = user
                const { socialmedialink } = user

                 
                    setUserInfo(prevState => {
                        return {...prevState,overview,experience}
                    }) 
                    setUserEducation(education)
                    setUserSkills([...userSkills, skills])
                    setUserPortfolio([...userPortfolio, portfolio]) 
                    setUserSocialmedialink([...userSocialmedialink,socialmedialink])   
            })
    },[])

    const showFeed = () => {
        setFeedToggle(true)
        setInfoToggle(false)
        setPortfolioeedToggle(false)
        setNotificationToggle(false)
        setJobToggle(false)
    }
    const showInfo = () => {
        setFeedToggle(false)
        setInfoToggle(true)
        setPortfolioeedToggle(false)
        setNotificationToggle(false)
        setJobToggle(false)
    }
    const showPortfolio = () => {
        setFeedToggle(false)
        setInfoToggle(false)
        setPortfolioeedToggle(true)
        setNotificationToggle(false)
        setJobToggle(false)
    }
    const showNotification = () => {
        setFeedToggle(false)
        setInfoToggle(false)
        setPortfolioeedToggle(false)
        setNotificationToggle(true)
        setJobToggle(false)
    }
    const showJob = () => {
        setFeedToggle(false)
        setInfoToggle(false)
        setPortfolioeedToggle(false)
        setNotificationToggle(false)
        setJobToggle(true)
    }
    
    return (

        <React.Fragment>
        <section className="cover-sec">
            <img src={UserCover} alt="" style={{maxWidth : '100%', height : '350px'}}/>
        </section>
		<main>
			<div className="main-section">
				<div className="container">
					<div className="main-section-data">
						<div className="row">
                                <UsersSocialMediaLinks 
                                        socialmedialink = { userDetails.companySocialmedialink } 
                                        picture = { userDetails.picture }
                                        country = { userDetails.country }
                                        email = { userDetails.email }
                                        phone = { userDetails.phone }
                                        address = { userDetails.address }
                                />
                                <div className="col-lg-6">
                        <div className="main-ws-sec">

                            <div className="user-tab-sec rewivew">
                            <h3> { userDetails.company}</h3>
                                        <div className="star-descp">
                                            <span>Established : { userDetails.registered }</span>
                                        </div>
                                        
                                        <div className="tab-feed st2 settingjb">
                                            <ul>
                                            <li onClick={showInfo}>
                                                <img src={InfoIcon} alt="" />
                                                <span>Info</span>
                                            </li>

                                            <li  onClick={showFeed}>
                                                <img src={FeedIcon} alt="" />
                                                <span>Feed</span>
                                            </li>
                                            <li onClick={showPortfolio}>
                                                <img src={PortfolioIcon} alt="" />
                                                <span>Portfolio</span>
                                            </li>
                                            <li  onClick={showNotification}>
                                                <img src={NotificationIcon} alt="" />
                                                <span>Notificatio</span>
                                            </li>
                                            <li  onClick={showJob}>
                                                <img src={JobIcon} alt="" />
                                                <span>Job</span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                { 
                                    infoToggle  ? <UserInfo 
                                                        overview={ userInfo.overview }
                                                        experiences = { userInfo.experience }
                                                        skills = { userSkills }
                                                        location = { userDetails.address }
                                                        country = { userDetails.country}
                                                        education = { userEducation}
                                                        
                                                        /> : 
                                    feedToggle ? <UserFeed 
                                                    email = { userDetails.email } /> : 
                                    portfolioToggle ? <UserPortfolio 
                                                    userPortfolio = {userPortfolio}
                                                    /> :
                                    notificationToggle ? <UserNotification /> : 
                                    jobToggle ? <UserJob 
                                                    email = { userDetails.email }/> : 
                                    <UserFeed  email = { userDetails.email }/>
                                }
                            </div>
                            </div>
                            <div className="col-lg-3">
								<div className="right-sidebar">
									<div className="message-btn">
                                    <button className="btn btn-info" onClick={openModal}>
                                        <i className="fa fa-pencil"></i> Edit Profil 
                                    </button>
                                    <UpdateUserModal
                                        showModal={showModal}
                                        closeModal={closeModal}
                                        userId = { userDetails._id}
                                        overview={ userInfo.overview }
                                        experiences = { userInfo.experience }
                                        skills = { userSkills }
                                        location = { userDetails.address }
                                        country = { userDetails.country}
                                        education = { userEducation}
                                        email = { userDetails.email } 
                                        socialmedialink = { userDetails.companySocialmedialink } 
                                        picture = { userDetails.picture }
                                        phone = { userDetails.phone }
                                        address = { userDetails.address }
                                        username = { userDetails.username}
                                        age = { userDetails.age}
                                        name = { userDetails.name}
                                        gender = { userDetails.gender}
                                        company = { userDetails.company}
                                        about = { userDetails.about}
                                        registered = { userDetails.registered}
                                        />
									</div>
                                    <UserPortfolio/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </React.Fragment>
    );
}
 
export default MainUserProfil;
