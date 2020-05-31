import React, {useState } from 'react'

export default function AsComapny(props) {

  const [companyName, setCompanyName] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [ agreeTermCondition, setAgreeTermCondition ] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    if(password !== repeatPassword && agreeTermCondition){
      alert("Your password must match and agree term and conditon")
    }
    else{
      props.handleSignUpCompany(companyName, country, password, 'any')
    }
  }

  return (
    <div className="dff-tab current" id="tab-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12 no-pdd">
            <div className="sn-field">
              <input type="text" placeholder="Company Name" value={companyName} onChange={event => {setCompanyName(event.target.value)}}/>
              <i className="la la-building"></i>
            </div>
          </div>
          <div className="col-lg-12 no-pdd">
            <div className="sn-field">
              <input  type="text" placeholder="Country" onChange={event => {setCountry(event.target.value)}}/>
              <i className="la la-globe"></i>
            </div>
          </div>
          <div className="col-lg-12 no-pdd">
            <div className="sn-field">
              <input type="password" placeholder="Password" onChange={event => {setPassword(event.target.value)}}/>
              <i className="la la-lock"></i>
            </div>
          </div>
          <div className="col-lg-12 no-pdd">
            <div className="sn-field">
              <input type="password" placeholder="Repeat Password" onChange={event => {setRepeatPassword(event.target.value)}}/>
              <i className="la la-lock"></i>
            </div>
          </div>
          <div className="col-lg-12 no-pdd">
            <div className="checky-sec st2">
              <div className="fgt-sec">
                <input type="checkbox" name="cc" id="c3" value={agreeTermCondition} onChange={event => {setAgreeTermCondition(true)}}/>
                <label htmlFor="c3">
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
            <button type="submit" value="submit"> Get Started </button>
          </div>
        </div>
      </form>
  </div>
  )
    
}
