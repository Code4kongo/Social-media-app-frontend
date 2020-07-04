import React, {  useState } from "react";
import Modal from "react-modal";
import axios from 'axios'
import "./UpdateUserModal.css";

Modal.setAppElement("#root");

const UpdateUserModal = (props) => {

    const { showModal,closeModal, userId, overview   ,country ,education, email   ,phone ,
                address ,
                username,
                age,
                name,
                gender,
                company,
                about,
                 } = props

    const [ user_username, setUsername ] = useState(username)
    const [ user_country, setUserCountry ] = useState(country)
    const [ user_age, setUserAge ] = useState(age)
    const [ user_name, setUserName ] = useState(name)
    const [ user_gender, setUserGender ] = useState(gender)
    const [ user_company, setUserCompany ] = useState(company)
    const [ user_email, setUserEmail ] = useState(email)
    const [ user_phone, setUserPhone ] = useState(phone)
    const [ user_address, setUserAddress ] = useState(address)
    const [ user_about, setUserAbout ] = useState(about)
    

        
    const [ user_overview, setUserOverview ] = useState(overview) 
    const [ userEducation, setUserEducation] = useState(education)
    

    const handleSubmit = (event) => {
        event.preventDefault()

        const updateduser = {
            username: user_username,
            country: user_country,
            age: user_age,
            name: user_name,
            gender: user_gender,
            company: user_company,
            email: user_email,
            phone: user_phone, 
            address: user_address,
            about: user_about,
            info: {
                overview : user_overview
            },
            education: userEducation
        }

        axios.patch(`http://localhost:8080/user/${userId}`, updateduser)
             .then(res => {
                 const data = res.data
                 console.log(data)
             })
             .catch(error => {
                 console.log(error)
             })
        
    }

    const style = {
        color: "#fff",
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8"
      }

    return (
    <Modal isOpen={showModal} onRequestClose={closeModal} className="modal-wrapper">
        <div className="post-project">
            <h3>Update my Profil </h3>
            <div className="post-project-fields">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <input type="email" className="form-control"  value={user_email}  onChange={(event) => setUserEmail(event.target.value)} placeholder="email"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <input type="text" className="form-control" value={user_username}  onChange={(event) => setUsername(event.target.value)} placeholder="Username"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <input type="text" className="form-control" value={user_age} onChange={(event) => setUserAge(event.target.value)} placeholder="Age"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <input type="text" className="form-control" value={user_name} onChange={(event) => setUserName(event.target.value)} placeholder="First Name - Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <input type="text" className="form-control" value={user_country} onChange={(event) => setUserCountry(event.target.value)} placeholder="Country"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="md-form form-group">
                                <input type="text" className="form-control" value={user_address}  onChange={(event) => setUserAddress(event.target.value)} placeholder="Address"/>
                            </div>
                        </div>        
                    </div>
                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <input type="text" className="form-control" value={user_company} onChange={(event) => setUserCompany(event.target.value)} placeholder="Company"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <input type="text" className="form-control" value={user_phone} onChange={(event) => setUserPhone(event.target.value)} placeholder="Phone"/>
                            </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <textarea lass="form-control" value={user_about} onChange={(event) => setUserAbout(event.target.value)} placeholder="about"></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form form-group">
                                <textarea lass="form-control" value={user_overview} onChange={(event) => setUserOverview(event.target.value)} placeholder="overview"></textarea>
                            </div>
                        </div>  
                        <div className="col-md-12">
                            <div className="md-form form-group">
                                <textarea lass="form-control" value={userEducation}  onChange={(event) => setUserEducation(event.target.value)} placeholder="education"></textarea>
                            </div>
                        </div>        
                    </div>
                    <div className="col-lg-6">
                            <ul>
                                <li> <button style={style} type="submit">  <i className="fa fa-pencil"></i> Edit User</button></li>
                                <li><button className= "btn btn-primary danger" onClick={closeModal}>Cancel</button></li>
                            </ul>
                        </div>
                </form>
        </div>
        <a href="/" title="">
          <i className="la la-times-circle-o"></i>
        </a>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
