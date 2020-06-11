import React from 'react'


const SingleElement = () => {
    return ( 
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={Icon} alt=""/>
                    <h3>Google Inc.</h3>
                    <h4>Establish Feb, 2004</h4>
                    <ul>
                        <li><a href="/" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                </div>
                <a href="company-profile.html" title="" className="view-more-pro">View Profile</a>
            </div>
        </div>
     );
}
 
export default SingleElement;
