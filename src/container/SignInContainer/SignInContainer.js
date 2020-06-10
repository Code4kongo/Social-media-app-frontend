import React , { useContext, useState  }from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from '../../components/SignUp/SignUp'
import CompanyIntroDetails from '../../components/CompanyIntroDetails/CompanyIntroDetails'
import { UserContext } from '../../contexts/userContext'
import { CompanyContext } from "../../contexts/companyContext";

const SignInContainer  = () => {

  let [toggle, setToggle ] = useState(true)

  const handleToggleStateSignIn = () => {
    setToggle(toggle = true)
  }

  const handleToggleStateSignUp = () => {
    setToggle(toggle = false)
  }

  const {  signInCompany, signUpCompany } = useContext(CompanyContext)
  const { signInUser, signUpUser } = useContext(UserContext)
  
  
  return ( 
    <div className="sign-in">
      <div className="wrapper">
        <div className="sign-in-page">
          <div className="signin-popup">
            <div className="signin-pop">
            <div className="row">
            <CompanyIntroDetails/>

            <div className="col-lg-6">
                  <div className="login-sec"> 
                    <ul className="sign-control">
                      <li data-tab="tab-1" className="current" onClick={handleToggleStateSignIn} ><a> Sign in </a> </li>
                      <li data-tab="tab-2"  onClick={handleToggleStateSignUp} > <a> Sign up </a> </li>
                    </ul>
                    { toggle ? 
                      <SignIn 
                          handleSignInUser = {signInUser}
                          handleSignInCompany = {signInCompany} 
                          /> :
                      <SignUp 
                          handleSignUpUser = {signUpUser} 
                          handleSignUpCompany ={ signUpCompany}
                          />
                    } 
                    </div>
                    </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   );
}
 
export default SignInContainer ;
