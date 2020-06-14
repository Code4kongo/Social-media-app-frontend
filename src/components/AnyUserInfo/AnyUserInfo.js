import React from "react";

const AnyUserInfo = (props) => {

    const { overview ,experiences ,skills ,location, country, education  } = props 

  return ( 
    <React.Fragment>
        <div className="product-feed-tab current">
    <div className="user-profile-ov">
      <h3>
        <a href="/" title="" className="overview-open">Overview</a>
        <a href="/" title="" className="overview-open"
          ><i className="fa fa-pencil"></i></a>
      </h3>
      <p>{overview}</p>
    </div>
    <div className="user-profile-ov">
      <h3>
        <a href="/" title="" className="overview-open">Education</a>
        <a href="/" title="" className="overview-open"
          ><i className="fa fa-pencil"></i></a>
      </h3>
      <p>{education}</p>
    </div>
    <div className="user-profile-ov">
      <h3>
        <a href="/" title="" className="ed-box-open"> Experience </a>
        <a href="/" title="" className="ed-box-open"
          ><i className="fa fa-pencil"></i></a>
        <a href="/" title=""><i className="fa fa-plus-square"></i></a>
      </h3>
        <p>{experiences}</p>
    </div>
    <div className="user-profile-ov">
      <h3>
        <a href="/" title="" className="lct-box-open">Location</a>
        <a href="/" title="" className="lct-box-open"><i className="fa fa-pencil"></i></a>
        <a href="/" title=""><i className="fa fa-plus-square"></i></a>
      </h3>
      <h4>{ country }</h4>
      <p>{ location }</p>
    </div>
    <div className="user-profile-ov">
      <h3>
        <a href="/" title="" className="skills-open">Skills</a>
        <a href="/" title="" className="skills-open"><i className="fa fa-pencil"></i></a>
        <a href="/"><i className="fa fa-plus-square"></i></a>
      </h3>
      <ul>
          {
            skills.map((skill,index) => {
              return ( <li key={index}><a href="/" title="">{ skill }</a></li>)
            })
          }
      </ul>
    </div>
</div>
    </React.Fragment>
   );
}
 
export default AnyUserInfo;