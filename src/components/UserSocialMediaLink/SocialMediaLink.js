import React, { useState } from 'react'
import axios from 'axios'

const UserSocialMediaLink = props => {

    const { _id, picture , country , email, phone, address, company_id, company_name, company_email, company_country, company_phone, company_address, company_picture } = props
    const user_image = `http://localhost:8080/${picture}`

    const [userpic, setUserpic] = useState("") 
    const [filename, setFilename] = useState("")
    let [ uploadedFile, setUploadedFile ] = useState("")

    const onChange = event => {
        setFilename(event.target.files[0].name)
        setUserpic(event.target.files[0])
    }
    const handleChangeProfil = (event) => {
        event.preventDefault()
        console.log('submitted')

        const formData = new FormData()
        formData.append('picture', userpic)
        for (var value of formData.values()) {
            console.log(value); 
         }

        axios.patch(`http://localhost:8080/user/picture/${_id}`, formData, {
                                    headers : {
                                        'Accept': 'application/json',
                                        'Content-Type': 'multipart/form-data',
                                    }
        }).then(res => {
            const newImage = res.data.path
            setUploadedFile(`http://localhost:8080/${newImage}`)
        }).catch(error => console.log(error))
        
    }
    const userSocialMediaLink = (
            <div className="col-lg-3">
                <div className="main-left-sidebar">
                <div className="user_profile">
                   <form onSubmit={handleChangeProfil}>
                        <div className="user-pro-img">
                            <div className="col-lg-12">
                               { 
                                !uploadedFile ? <img src={user_image} alt="image"/> : <img src={uploadedFile} alt="image"/>
                               }
                            </div>
                            <div className="col-lg-12">
                                <div className="custom-file" style={{marginBottom : "5px"}}>
                                    <label className="custom-file-label" htmlFor="customFile" onChange={onChange} >{filename}</label>
                                    <input type="file" id="customFile" onChange={onChange}/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="btn btn-info">Change profil</button>
                            </div>
                        </div>
                   </form>
                    <div className="user_pro_status">
                        <ul className="social_links" >
                            <li>
                                <h4> <b>Email : </b> {email}</h4>  
                            </li>
                            <li>
                            <h4> <b>Country :</b> {country} </h4> 
                            </li>
                            <li>
                                <h4> <b>Phone :</b> {phone} </h4> 
                            </li>
                            <li>
                                <h4> <b>Address :</b> {address}</h4> 
                            </li>
                        </ul>
                    </div>
                    <ul className="social_links">
                        <li><a href="/" title=""><i className="la la-globe"></i> www.example.com</a></li>
                        <li><a href="/" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</a></li>
                    </ul>
                </div>
            </div>
        </div>   
    )



    const company_image = `http://localhost:8080/${company_picture}`
    const [companypic, setCompanypic] = useState("") 
    const [filenameComp, setFilenameComp] = useState("")
    let [ uploadedFileComp, setUploadedFileComp ] = useState("")

    const onChangeComp = event => {
        setFilenameComp(event.target.files[0].name)
        setCompanypic(event.target.files[0])
    }
    const handleChangeProfilComp = (event) => {
        event.preventDefault()
        
        const formData = new FormData()
        formData.append('picture', companypic)

        axios.patch(`http://localhost:8080/company/picture/${company_id}`, formData, {
                                    headers : {
                                        'Accept': 'application/json',
                                        'Content-Type': 'multipart/form-data',
                                    }
        }).then(res => {
            const newImage = res.data.path
            setUploadedFileComp(`http://localhost:8080/${newImage}`)
        }).catch(error => console.log(error))
        
    }
    const companySocialMediaLink = (
        <div className="col-lg-3">		
                <div className="main-left-sidebar">
                <div className="user_profile">	
                    <form onSubmit={handleChangeProfilComp}>
                    <div className="user-pro-img">	
                        <div className="user-pro-img">
                            <div className="col-lg-12">
                               { 
                                !uploadedFileComp ? 
                                    <img src={company_image} 
                                                width="50%" 
                                                height="20%" style={{ margin : 'auto', marginBottom : '8%'}}
                                            /> : 
                                    <img src={uploadedFileComp} 
                                                width="50%" 
                                                height="20%" style={{ margin : 'auto', marginBottom : '8%'}}
                                    />
                               }
                            </div>
                            <div className="col-lg-12">
                                <div className="custom-file" style={{marginBottom : "5px"}}>
                                    <label className="custom-file-label" htmlFor="customFile" onChange={onChangeComp} >{filenameComp}</label>
                                    <input type="file" id="customFile" onChange={onChangeComp}/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="btn btn-info">Change profil</button>
                            </div>
                        </div>
                        </div>
                   </form>
                   <div className="user_pro_status">
                        <ul className="social_links" >
                            <li>
                                <h4> <b>Email : </b> {company_email}</h4>  
                            </li>
                            <li>
                            <h4> <b>Country :</b> {company_country} </h4> 
                            </li>
                            <li>
                                <h4> <b>Phone :</b> {company_phone} </h4> 
                            </li>
                            <li>
                                <h4> <b>Address :</b> {company_address}</h4> 
                            </li>
                        </ul>
                    </div>
                    <ul className="social_links">
                        <li><a href="/" title=""><i className="la la-globe"></i> www.example.com</a></li>
                        <li><a href="/" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</a></li>
                        <li><a href="/" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</a></li>
                    </ul>
                    </div>
                </div>
            </div>    
    )


    if(email === undefined){
        return companySocialMediaLink
    }else {
        return userSocialMediaLink
    }
    
}
 
export default UserSocialMediaLink;