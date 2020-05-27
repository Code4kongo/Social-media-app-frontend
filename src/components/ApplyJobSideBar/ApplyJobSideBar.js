import React from 'react'
import FacebookIcon from '../../images/social1.png'
import InstagramIcon from '../../images/social2.png'
import GoogleIcon from '../../images/social3.png'
import TwitterIcon from '../../images/social4.png'
import PniterestIcon from '../../images/social5.png'

const  ApplyJobSideBar = () => {
    return ( 
        <div className="col-xl-3 col-lg-3 col-md-12">
            <div className="right-sidebar">
                <div className="widget widget-about bid-place">
                    <button type="button" className="btn btn-primary" >Send email </button>
                </div>
                <div className="widget widget-projectid">
                    <h3>Job ID : 123456789</h3>
                    <p>Report Job</p>
                </div>
                <div className="widget widget-jobs">
                    <div className="sd-title">
                        <h3>About the Company</h3>
                        <i className="la la-ellipsis-v"></i>
                    </div>
                
                    <div className="sd-title">
                        <h4>India</h4>                                            
                        <p>SKS Nagar, Ludhiana 1 AM</p>
                    </div>
                    <div className="sd-title">
                        <h4>20 Projects Posted | 15 Jobs Posted</h4>                                            
                        <p>85% Hire Rate, 15% Open Jobs</p>
                    </div>
                    <div className="sd-title">
                        <h4>Member Since</h4>                                            
                        <p>August 24, 2017</p>
                    </div>
                </div>
                <div className="widget widget-jobs">
                    <div className="sd-title">
                        <h3>Share</h3>
                    </div>
                    <div className="sd-title copylink">
                        <ul>
                            <li><img src={FacebookIcon} alt="pic"/> </li>
                            <li><img src={TwitterIcon} alt="ima"/> </li>
                            <li><img src={InstagramIcon} alt="ima"/> </li>
                            <li><img src={GoogleIcon} alt="ima"/> </li>
                            <li><img src={PniterestIcon} alt="ima"/> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default ApplyJobSideBar ;
