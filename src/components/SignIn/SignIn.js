import React, {useState} from "react";


const SignIn = props => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSignIn(username, password)
  }

  return (
    <div className="sign_in_sec current" id="tab-1">
    <h3>Sign in</h3>
    <form onSubmit={handleSubmit} >
      <div className="row">
        <div className="col-lg-12 no-pdd">
          <div className="sn-field">
            <input type="email" placeholder="email" required value={username} onChange={(event) => {setUsername(event.target.value)}}/>
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
          <button type="submit" value="submit"> Sign in </button>
        </div>
      </div>
    </form>
    <div className="login-resources">
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



