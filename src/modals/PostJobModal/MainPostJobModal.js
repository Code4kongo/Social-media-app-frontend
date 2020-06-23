import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import './MainPostJob.css'
import { JobContext } from '../../contexts/jobContext'


Modal.setAppElement('#root')

const  MainPostJob = (props) => {

    const [title, setTitile ] = useState("") 
    const [applicants, setApplicants ] = useState(0)  
    const [jobType, setJobType] = useState("") 
    const [salary, setSalary ] = useState("") 
    const [views, setViews ] = useState(0) 
    const [country, setCountry ] = useState("") 
    const [author, setAuthor ] = useState("") 
    const [email, setEmail ] = useState("") 
    const [phone, setPhone] = useState("") 
    const [content, setContent ] = useState("")
    
    const [address, setAddress] = useState("") 
    const [overview, setOverview ] = useState("")
    const [total_employee, setTotal_employee ] = useState("") 


    const { showModal, closeModal } = props

    const { addJob }= useContext(JobContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        addJob(title, applicants, jobType,salary,views, country, author, email, phone, content, address,overview , total_employee)
    }

    return (
    
        <Modal isOpen={showModal} onRequestClose={closeModal} className="modal-wrapper">
        <div className="post-project">
            <h3>Post a project</h3>
            <div className="post-project-fields">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Title" value={title} onChange={(event)=>{setTitile(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <div className="inp-field">
                                <select defaultValue="Full-time" onChange={event => {setJobType(event.target.value)}} required>
                                    <option>Job Type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <textarea name="description" placeholder="Company Overview" value={overview }  onChange={(event)=>{setOverview(event.target.value)}} required></textarea>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Salary in ZAR" value={salary} onChange={(event)=>{setSalary(event.target.value)}} required/>
                        </div>

                        <div className="col-lg-6">
                            <input type="text"  placeholder="Country" value={country} onChange={(event)=>{setCountry(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Author" value={author} onChange={(event)=>{setAuthor(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="email"  placeholder="Email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Phone" value={phone} onChange={(event)=>{setPhone(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Address" value={address} onChange={(event)=>{setAddress(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Number of employee" value={total_employee} onChange={(event)=>{setTotal_employee(event.target.value)}} required/>
                        </div>
                       
                        <div className="col-lg-6">
                            <textarea name="description" placeholder="Description" value={content }  onChange={(event)=>{setContent(event.target.value)}} required></textarea>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><button className="active" type="submit" value="post">Post</button></li>
                                <li><button className= "btn btn-primary danger" onClick={closeModal}>Cancel</button></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
            <a href="/" title=""><i className="la la-times-circle-o"></i></a>
        </div>
    </Modal>
    )
}

export default MainPostJob
