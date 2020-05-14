import React, { Component } from 'react'
import UserProfiction from '../components/UserProfiction/UserProfiction'
import PostJob from "../components/PostJob/PostJob"
import AllPost from '../components/AllPost/AllPost'
import  TopJobs from '../components/TopJobs/TopJobs'
import MostViews from '../components/MostViewd/MostView'

export class Main extends Component {
    render() {
        return (
            <div style = {{backgroundColor : 'yellow'}} >
                <UserProfiction/>
                <PostJob/>
                <AllPost/>
                <TopJobs/>
                <MostViews/>
            </div>
        )
    }
}

export default Main
