import React, {useState} from "react";




const SignIn = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let  [toggle, setToggle] = useState(true)

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
                <button type="submit"  value="submit" className="btn btn-info">
                    Sign in as User
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
                <button type="submit" className="btn btn-info" value="submit"> Sign in as Company</button>
                
              </div>
            </div>
          </form>
  )

  return (
    <div className="sign_in_sec current" id="tab-1">
    <h3>Sign in</h3>
    <div className="col-lg-6">
        <div className="login-sec"> 
          <ul className="sign-control">
            <li data-tab="tab-1" className="current"><button className="btn btn-info" onClick={handleToggleStateUser}> User </button> </li>
            <li data-tab="tab-2"> <button className="btn btn-secondary" onClick={handleToggleStateCompany}> Company </button> </li>
          </ul>
          { toggle ? AsUser : AsCompany} 
        </div>
    </div>
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



