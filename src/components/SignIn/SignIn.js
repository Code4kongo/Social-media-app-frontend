import React, {useState} from "react";
import { Link } from "react-router-dom";
import OnSuccessMessage from '../../feedback/SuccessMeesgae/SuccessMeesgae'
import OnFailureMessage from '../../feedback/FailureMeesage/FailureMeesage'



const SignIn = props => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let  [toggle, setToggle] = useState(true)

  const  onSuccess = props.onSuccess
  const  onFailure = props.onFailure

  const handleToggleStateUser = () => {
    setToggle(toggle = true)
  }

  const handleToggleStateCompany = () => {
    setToggle(toggle = false)
  }

  const handleSubmitUser = (event) => {
    event.preventDefault()
    props.handleSignInUser(email, password)

  }
  const handleSubmitCompany = (event) => {
    event.preventDefault()
    props.handleSignInCompany(email, password)

  }

  const style = {
    color: "#fff",
    backgroundColor: "#17a2b8",
    borderColor: "#17a2b8"
  }

  let AsUser = (
          <form onSubmit={handleSubmitUser} >
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="email" placeholder="email" required value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                  <i className="la la-user"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="password"  placeholder="Password" required value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec">
                  <div className="fgt-sec">
                    <input type="checkbox"/>
                    <label htmlFor="c1">  <span></span> </label>
                    <small>Remember me</small>
                  </div>
                  <a href="/"> Forgot Password? </a>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
              
                <button type="submit"  value="submit" style={style}>
                  <Link to="/home" style={style}>  Sign in as User </Link>
                </button>  
                 
              </div>
            </div>
          </form>
  )
  let AsCompany = (
          <form onSubmit={handleSubmitCompany} >
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="email" placeholder="email" required value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                  <i className="la la-user"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="password"  placeholder="Password" required value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec">
                  <div className="fgt-sec">
                    <input type="checkbox"/>
                    <label htmlFor="c1">  <span></span> </label>
                    <small>Remember me</small>
                  </div>
                  <a href="/"> Forgot Password? </a>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <button type="submit" style={style} value="submit"> 
                  <Link to="/home" style={style}> Sign in as Company </Link>  
                </button>
                
              </div>
            </div>
          </form>
  )

  return (
    <div className="sign_in_sec current" id="tab-1">
    <h3>Sign in</h3>
    <br/> 
    <div className="signup-tab">
                    <i className="fa fa-long-arrow-left"></i>
                    <h2>johndoe@example.com</h2>
                    <ul>
                        <li data-tab="tab-3" className="current"> <button className="btn btn-info" onClick={handleToggleStateUser}> User </button> </li>
                        <li data-tab="tab-4">  <button className="btn btn-secondary" onClick={handleToggleStateCompany}> Company </button> </li>
                    </ul>
                </div>
                <div className="dff-tab current" id="tab-3">
 
          { toggle ? AsUser : AsCompany} 
        </div>
  
    <div className="login-resources">
          { 
              onSuccess ? <OnSuccessMessage message = "Great! Succesfully Signed In" /> : null
          }
          {
               onFailure ? <OnFailureMessage message = "Email or Password wrong" /> : null 
          }
      <h4>Login Via Social Account</h4>
      <ul>
        <li>
          <a href="/" className="fb">  <i className="fa fa-facebook"></i>Login Via Facebook </a>
        </li>
        <li>
          <a href="/" className="tw"> <i className="fa fa-twitter"></i>Login Via Twitter  </a>
        </li>
      </ul>
    </div>
  </div>      
  )
}

export default SignIn



