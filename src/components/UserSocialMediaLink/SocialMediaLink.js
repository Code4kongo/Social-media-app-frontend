import React, { useState } from 'react'
import Avatar from 'react-avatar-edit'
import UserImage from '../../images/resources/user-pro-img.png'
import axios from 'axios'

const UserSocialMediaLink = props => {
    const { _id, picture , country , email, phone, address, company_id, company_name, company_email, company_country, company_phone, company_address, company_picture } = props
    const user_image = `http://localhost:8080/${picture}`
    const company_image = `http://localhost:8080/${company_picture}`

    const [ userpreview, setPreview ] = useState(user_image) 
    const [ user_src, setSrc ] = useState(user_image)

    const onClose_user = preview => {

       setPreview(preview)
       setSrc(preview)
      }
      
    const onCrop_user = (preview) => {
        console.log(preview)
        setPreview(preview)
        setSrc(preview)


       const formData = new FormData()
       formData.append('postImage', preview)

        axios.patch(`http://localhost:8080/user/picture/${_id}`, formData, {
                                    headers : {
                                        'Accept': 'application/json',
                                        'Content-Type': 'multipart/form-data',
                                    }
        }).then(res => {
            console.log(res)
        }).catch(error => console.log(error))

    }

    const userSocialMediaLink = (
        <div className="col-lg-3">
								
                <div className="main-left-sidebar">
                
                <div className="user_profile">
                    
                    <div className="user-pro-img" 
                         style= {{ 
                                    marginBottom : '20%', 
                                    alignContent: 'center',
                                    backgroundColor : '#f4f4f4'
                    }}>
                            <Avatar
                                width={230}
                                height={200}
                                onCrop={onCrop_user}
                                onClose={onClose_user}
                                src={user_src}
                            />		
                            <img src={userpreview} alt={"Change Profil"}/>					
                        
                    </div>
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


    const [ companypreview, setCompanyPreview ] = useState(company_image) 
    const [ company_src, setCompanySrc ] = useState(company_image)

    const onClose_company = preview => {
        setCompanyPreview(preview)
        setCompanySrc(preview)
      }
      
    const onCrop_company = (preview) => {
        setCompanyPreview(preview)
        setCompanySrc(preview)

    }

    const companySocialMediaLink = (
        <div className="col-lg-3">
								
                <div className="main-left-sidebar">
                
                <div className="user_profile">
                    
                    <div className="user-pro-img"
                         style= {{ 
                                    marginBottom : '20%', 
                                    alignContent: 'center',
                                    backgroundColor : '#f4f4f4'
                            }}>
                            <Avatar
                                width={230}
                                height={200}
                                onCrop={onCrop_company}
                                onClose={onClose_company}
                                src={company_src}
                            />		
                            <img src={companypreview} alt={"Change Profil"}/>					
                    </div>
                    <div className="user_pro_status">
                        <ul className="social_links" >
                        <li>
                                <h4> <b>Name :</b> {company_name}</h4> 
                            </li>
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