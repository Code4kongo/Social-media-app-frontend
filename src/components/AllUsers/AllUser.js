import React, { Component } from 'react'
import SingleUser from '../SingleElement/SingleElement'

export class AllUser extends Component {
    render() {
        return (
            <div>
                These are all the users
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
            </div>
        )
    }
}

export default AllUser
