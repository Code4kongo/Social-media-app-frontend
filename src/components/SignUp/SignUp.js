import React, { useState } from "react";
import AsComapny from './AsComapny'
import AsUser from './AsUser'

const SignUp = (props) => {

    let [toggleAccount, setToggle ] = useState(true)

    const handleToggleAccountUser = () => {
      setToggle(toggleAccount = true)
    }
  
    const handleToggleAccountCompany = () => {
      setToggle(toggleAccount = false)
    }

    return ( 
            <div className="sign_in_sec current" id="tab-2">
                 <h3>Sign up</h3>
                <br/> 
                <div className="signup-tab">
                    <i className="fa fa-long-arrow-left"></i>
                    <h2>johndoe@example.com</h2>
                    <ul>
                        <li data-tab="tab-3" className="current" onClick={handleToggleAccountUser}> <a> User </a> </li>
                        <li data-tab="tab-4" onClick={handleToggleAccountCompany}>  <a> Company </a> </li>
                    </ul>
                </div>
                { toggleAccount ? <AsUser handleSignUpUser={props.handleSignUpUser}/> : <AsComapny handleSignUpCompany={props.handleSignUpCompany} />}
            </div>
     );
}
 
export default SignUp ;
