import React, { Component } from 'react'
import SinglePost from '../SinglePost/SinglePost'

export class AllPost extends Component {
    render() {
        return (
            <div>
                <SinglePost/>
                <SinglePost/>
                <SinglePost/>
            </div>
        )
    }
}

export default AllPost
