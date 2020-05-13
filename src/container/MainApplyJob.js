import React, { Component } from 'react'
import SingleJob from '../components/SingleJob/SingleJob'
import ApplyJobSideBar from '../components/ApplyJobSideBar/ApplyJobSideBar'


export class MainApplyJob extends Component {
    render() {
        return (
            <div style={{backgroundColor : 'blue'}}>
                Job Info 
                <SingleJob/>
                <ApplyJobSideBar/>
            </div>
        )
    }
}

export default MainApplyJob
