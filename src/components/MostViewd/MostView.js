import React from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../feedback/LoadingSpinner/LoadingSpinner'

const MostView = ({mostViewed, loadingMostViewed}) => {

return ( 
    <div className="widget widget-jobs">
        <div className="sd-title">
            <h3>Most Viewed This Week</h3>
        </div>
            {
                !loadingMostViewed? <LoadingSpinner/>  : mostViewed.map(job => {
                    return (
                        <div className="card  mb-3" style={{maxWidth: '18rem'}} key={job._id}>
                        <div className="card-header">{job.title}</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">
                            <Link to={`/apply-job/${job._id}`}>
                                view job
                            </Link>
                            </h5>
                            <p className="card-text">{job.overview} </p>
                        </div>
                    </div>
                    )
                })
            }
    </div>
    );
}
 
export default MostView;

