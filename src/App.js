import React , { useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios'
import "./App.css";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ApplyJobPage from "./pages/AppyJobPage";
import CommunityGuideLinePage from "./pages/CommunityGuideLinePage";
import AnyUserPage from './pages/AnyUserPage'
import CompaniesPage from "./pages/CompaniesPage";
import CompanyProfilPage from "./pages/CompanyProfilPage";
import AnyCompanyProfilPage from "./pages/AnyCompanyProfilPage";
import ErrorPage from "./pages/ErrorPage";
import JobsPage from "./pages/JobsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SignInPage from "./container/SignInContainer/SignInContainer";
import UserProfilPage from "./pages/UserProfilPage";
import UsersPage from "./pages/UsersPage";
import UserContextProvider from "./contexts/userContext";
import CompanyContextProvider from "./contexts/companyContext";
import JobContextProvider from "./contexts/jobContext";
import PostContextProvider from "./contexts/postContext";
import ProtectedRoute from './ProtectedRoutes'
import Unauthorized from './Unauthorized'


const  App = () => {

  const [ userDetails, setUserDetails ] = useState({
    _id : "",
    username : "",
    password : "",
    picture : "",
    country : "",
    age : 0,
    name : "",
    gender : "",
    company : "",
    email : "",
    phone : "",
    address : "",
    about : "",
    registered : "",
})
const [ userInfo, setUserInfo ] = useState({
    overview : "",
    experience : ""
}) 
const [ userEducation, setUserEducation] = useState("")
const [ userSkills, setUserSkills] = useState([])
const [ userPortfolio, setUserPortfolio] = useState([])
const [ userSocialmedialink, setUserSocialmedialink] = useState([])
const [isAuthUser, setAuth ] = useState(false)


const signInUser = (email, password ) => {
    axios.post('http://localhost:8080/user/login', {email, password})
         .then(res => {
            let user = res.data.user[0]
            const {  _id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered,education } = user
            const { overview, experience } = user.info
            const { skills } = user
            const { portfolio } = user
            const { socialmedialink } = user

                setAuth(true)
                setUserDetails(prevState => {
                    return { ...prevState, _id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered}
                })
                setUserInfo(prevState => {
                    return {...prevState,overview,experience}
                }) 
                setUserEducation(education)
                setUserSkills([...userSkills, skills])
                setUserPortfolio([...userPortfolio, portfolio]) 
                setUserSocialmedialink([...userSocialmedialink,socialmedialink]) 
                
         })
         .catch(error => {
                setAuth(false)
                console.log(error)
          })
}
console.log(isAuthUser)
  return (
    <React.Fragment>
      <div className="wrapper">
        <Switch>
        <CompanyContextProvider>
        <UserContextProvider>
        <PostContextProvider>
        <JobContextProvider>
        
          <Route exact path="/"  signInUser = { signInUser } userDetails = { userDetails} render = {props => <SignInPage {...props} signInUser={signInUser} />}  />
          <ProtectedRoute exact path="/home" isAuthUser = {isAuthUser}   userDetails = {userDetails}  component={Home} />
          <ProtectedRoute exact path="/companies" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={CompaniesPage} />
          <ProtectedRoute exact path="/company/:companyId" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={CompanyProfilPage}/>
          <ProtectedRoute exact path="/companies/:companyId" isAuthUser = {isAuthUser}  userDetails = {userDetails}  component={AnyCompanyProfilPage}/>
          <ProtectedRoute exact path="/users" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={UsersPage}/>
          <ProtectedRoute exact path="/users/:userId" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={AnyUserPage}/>
          <ProtectedRoute exact path="/jobs" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={JobsPage} />
          <ProtectedRoute exact path="/apply-job/:jobId" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={ApplyJobPage}/>
          <ProtectedRoute exact path="/my-profile" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={UserProfilPage}/>
          <ProtectedRoute exact path="/about" isAuthUser = {isAuthUser}  userDetails = {userDetails}  component={AboutPage} />
          <ProtectedRoute exact path="/privacy-policy" isAuthUser = {isAuthUser} userDetails = {userDetails}  component={PrivacyPolicyPage} />
          <ProtectedRoute exact path="/community-guide-line" isAuthUser = {isAuthUser}  component={CommunityGuideLinePage}/>
          <Route exact path='/unauthorized' component={Unauthorized} />

        </JobContextProvider>  
        </PostContextProvider>
        </UserContextProvider>
        </CompanyContextProvider>
          <Route component={ErrorPage} />  
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
