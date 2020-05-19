import React from 'react'

function ApplyJobHeader() {
    return (
        <div className="bids-detail">    
            <div className="row">
                <div className="col-12 appliedjob">
                    <ul>
                        <li>
                            <h3>Applicants</h3>
                            <br/>
                            <p>10</p>
                        </li>
                        <li>
                            <h3>Job Type</h3>
                            <br/>
                            <p>Full Time</p>
                        </li>
                        <li>
                            <h3>Salary</h3>
                            <br/>
                            <p>$600 - Mannual</p>
                        </li>
                        <li>
                            <h3>Views</h3>
                            <br/>
                            <p>195</p>
                        </li>
                    </ul>
                    <div className="bids-time">
                        <h3>Posted : 5 Days Ago</h3>
                            <br/>
                            <p>Open</p> 
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ApplyJobHeader
