import React from 'react'
import { Link } from 'react-router-dom'

const MostView = ({mostViewed}) => {

    let textLimit = (string= "sometext") => {
		let arrayTransform = string.split('')
		let filterText = arrayTransform.slice(0, 100)
		let resultText = filterText.join('')
		let newString = resultText.toString()
		return newString
    }	

    return ( 
        <div className="widget widget-jobs">
            <div className="sd-title">
                <h3>Most Viewed This Week</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="jobs-list">
                {
                    mostViewed.map(job => {
                        const filterOverview = textLimit(job.overview)
                        return (
                                <div className="job-info" key={job._id}>
                                        <div className="job-details">
                                            <h3> {job.title} </h3>
                                                <p>{filterOverview} ...
                                                    <Link
															to={{
																pathname: `/apply-job/${job._id}`,
																state: { fromDashboard: true }
															}}>
														view more
													</Link>
                                                </p>
                                        </div>
                                    <div className="hr-rate">
                                        <span>R{job.salary}</span>
                                    </div>
                                </div>
                        )
                    })
                }



            </div>
        </div>
     );
}
 
export default MostView;

