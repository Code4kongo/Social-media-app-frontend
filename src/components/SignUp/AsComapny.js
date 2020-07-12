import React, {useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import OnSuccessMessage from '../../feedback/SuccessMeesgae/SuccessMeesgae'
import OnFailureMessage from '../../feedback/FailureMeesage/FailureMeesage'

export default function AsComapny(props) {

  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [ agreeTermCondition, setAgreeTermCondition ] = useState(false)
  const [ companyCreated, setCompanyCreated ] = useState(false)
  const [onSuccess, setOnSuccess ] = useState(false)
  const [onFailure, setOnFailure ] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    console.log(agreeTermCondition)
    if(password !== repeatPassword && !agreeTermCondition){
      alert("Your password must match and agree term and conditon")
    }
    const newCompany = {
      company ,
      password ,
      picture: "" ,
      country ,
      createdAt : "" ,
      email ,
      phone: "" ,
      address: "" ,
      about: "" ,
      registered: "",
      total_number_employee : 0,
      info: {
          overview : "" ,
          awards : [],
      },
      skills: [],
      portfolio: [],
      socialmedialink: [] ,  
    }
    axios.post('http://localhost:8080/company/signup', newCompany)
        .then(res => {
            let user = res.data
            setOnSuccess(true)
            setCompanyCreated(true)
        })
        .catch(error =>{ 
                console.log(error)
                setOnFailure(true)
        })    
  }

  const style = {
    color: "#fff",
    backgroundColor: "#17a2b8",
    borderColor: "#17a2b8"
  }

  if(companyCreated){
    return  <Redirect to="/" />
  }else {

      return (
        <div className="dff-tab current" id="tab-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="email" placeholder="Company email" value={email} onChange={event => {setEmail(event.target.value)}}/>
                  <i className="la la-building"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text" placeholder="Company name" value={company} onChange={event => {setCompany(event.target.value)}}/>
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
              { 
                  onSuccess ? <OnSuccessMessage message = "Great! Succesfully Signed Up" /> : null
              }
              {
                  onFailure ? <OnFailureMessage message = "Email or Password wrong" /> : null 
              }
                <div className="checky-sec st2">
                  <div className="fgt-sec">
                    <input type="checkbox" name="cc" id="c3" value={agreeTermCondition} onChange={event => {setAgreeTermCondition(!agreeTermCondition)}}/>
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
                <button type="submit" value="submit" style={style}> Get Started </button>
              </div>
            </div>
          </form>
      </div>
      )
  }
    
}
