import React from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../feedback/LoadingSpinner/LoadingSpinner'

const TopJobs = ({topJobs, loadingTopJobs}) => {

	

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
						<h3>Top Jobs</h3>
							<i className="la la-ellipsis-v"></i>
					</div>
					{
					  !loadingTopJobs ? <LoadingSpinner/> :	topJobs.map(topJob => {
							const filteredInfo = textLimit(topJob.overview)
							return (<div className="jobs-list" key={topJob._id}>
										<div className="job-info">
											<div className="job-details">
												<h3>{topJob.title}</h3>
													<p>{filteredInfo}... 
														<Link
																to={{
																	pathname: `/apply-job/${topJob._id}`,
																	state: { fromDashboard: true }
																}}>
															view more
														</Link>
													</p>
											</div>
											<div className="hr-rate">
												<span>R{topJob.salary}</span>
											</div>
										</div>
									</div>
							)
						})
					}
	
					
				</div>
		 );
	
}
 
export default TopJobs ;
