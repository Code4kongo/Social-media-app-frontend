import React, { Component } from 'react'
import SingleJob from '../../components/SingleJob/SingleJob'
import ApplyJobSideBar from '../../components/ApplyJobSideBar/ApplyJobSideBar'
import ApplyJobHeader from '../../components/ApplyJobHeader/ApplyJobHeader'


export class MainApplyJob extends Component {
    render() {
        return (
            <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">  
                            <div className="col-xl-9 col-lg-9 col-md-12">         
                                <ApplyJobHeader/>
                                <SingleJob/>
                            </div>   
                            <ApplyJobSideBar/> 
                        </div>
                        
                    </div>
                </div>
            </div>
            </main>
        )
    }
}

export default MainApplyJob
