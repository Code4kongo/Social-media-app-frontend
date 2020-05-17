import React, { Component } from 'react'

export class FilterJob extends Component {
    render() {
        return (
            <div class="col-lg-3">
								<div className ="filter-secs">
									<div className ="filter-heading">
										<h3>Filters</h3>
										<a href="/" title="">Clear all filters</a>
									</div>
									<div className ="paddy">
										<div className ="filter-dd">
											<div className ="filter-ttl">
												<h3>Skills</h3>
												<a href="/" title="">Clear</a>
											</div>
											<form>
												<input type="text" name="search-skills" placeholder="Search skills"/>
											</form>
										</div>
										<div className ="filter-dd">
											<div className ="filter-ttl">
												<h3>Availabilty</h3>
												<a href="/" title="">Clear</a>
											</div>
											<ul className ="avail-checks">
												<li>
													<input type="radio" name="cc" id="c1"/>
													<label for="c1">
														<span></span>
													</label>
													<small>Hourly</small>
												</li>
												<li>
													<input type="radio" name="cc" id="c2"/>
													<label for="c2">
														<span></span>
													</label>
													<small>Part Time</small>
												</li>
												<li>
													<input type="radio" name="cc" id="c3"/>
													<label for="c3">
														<span></span>
													</label>
													<small>Full Time</small>
												</li>
											</ul>
										</div>
										<div className ="filter-dd">
											<div className ="filter-ttl">
												<h3>Job Type</h3>
												<a href="/" title="">Clear</a>
											</div>
											<form className ="job-tp">
												<select>
													<option>Select a job type</option>
													<option>Select a job type</option>
													<option>Select a job type</option>
													<option>Select a job type</option>
												</select>
												<i className ="fa fa-ellipsis-v" aria-hidden="true"></i>
											</form>
										</div>
										<div className ="filter-dd">
											
											
										</div>
										<div className ="filter-dd">
											<div className ="filter-ttl">
												<h3>Experience Level</h3>
												<a href="/" title="">Clear</a>
											</div>
											<form className ="job-tp">
												<select>
													<option>Select a experience level</option>
													<option>3 years</option>
													<option>4 years</option>
													<option>5 years</option>
												</select>
												<i className ="fa fa-ellipsis-v" aria-hidden="true"></i>
											</form>
										</div>
										<div className ="filter-dd">
											<div className ="filter-ttl">
												<h3>Countries</h3>
												<a href="/" title="">Clear</a>
											</div>
											<form className ="job-tp">
												<select>
													<option>Select a country</option>
													<option>United Kingdom</option>
													<option>United States</option>
													<option>Russia</option>
												</select>
												<i className ="fa fa-ellipsis-v" aria-hidden="true"></i>
											</form>
										</div>
									</div>
								</div>
                
            </div>
        )
    }
}

export default FilterJob
