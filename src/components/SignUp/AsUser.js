import React, { useState } from 'react'

export default function AsUser(props) {

  const [fullname, setFullname] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [ agreeTermCondition, setAgreeTermCondition ] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    if(password !== repeatPassword && agreeTermCondition){
      alert("Your password must match and agree term and conditon")
    }
    else{
      props.handleSignUpUser(fullname, country, gender, password)
    }
  }

    return (
        <div className="dff-tab current" id="tab-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input type="text"  placeholder="Full Name" value={fullname} onChange={event => setFullname(event.target.value)}/>
                <i className="la la-user"></i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input type="text" placeholder="Country" value={country} onChange={event => setCountry(event.target.value)}/>
                <i className="la la-globe"></i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <select defaultValue={gender} onChange={(event => setGender(event.target.value))}>
                  <option>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <i className="la la-dropbox"></i>
                <span>
                  <i className="fa fa-ellipsis-h"></i>
                </span>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input type="password"  placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                <i className="la la-lock"></i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input type="password"  placeholder="Repeat Password" value={repeatPassword} onChange={event => setRepeatPassword(event.target.value)}/>
                <i className="la la-lock"></i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="checky-sec st2">
                <div className="fgt-sec">
                  <input type="checkbox" name="cc" id="c3" value={agreeTermCondition} onChange={event => {setAgreeTermCondition(true)}}/>
                  <label htmlFor="c2">
                    <span></span>
                  </label>
                  <small>
                    Yes, I understand and agree to the workwise
                    Terms & Conditions.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <button type="submit" value="submit">
                Get Started
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}
