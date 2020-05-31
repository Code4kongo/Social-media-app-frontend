import React , { useContext, useState  }from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from '../../components/SignUp/SignUp'
import CompanyIntroDetails from '../../components/CompanyIntroDetails/CompanyIntroDetails'
import { UserContext } from '../../contexts/userContext'

const SignInContainer  = () => {

  let [toggle, setToggle ] = useState(true)

  const handleToggleStateSignIn = () => {
    setToggle(toggle = true)
  }

  const handleToggleStateSignUp = () => {
    setToggle(toggle = false)
  }

  const { signIn, signUpUser, signUpCompany } = useContext(UserContext)
  

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
                    { toggle ? <SignIn handleSignIn = {signIn}/> : <SignUp handleSignUpUser = {signUpUser} handleSignUpCompany ={ signUpCompany }/>} 
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
