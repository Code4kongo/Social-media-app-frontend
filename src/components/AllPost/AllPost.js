import React, { Component } from 'react'
import SinglePost from '../SinglePost/SinglePost'

export class AllPost extends Component {
    render() {
        return (
            <div>
                These are all the post
                <SinglePost/>
            </div>
        )
    }
}

export default AllPost
