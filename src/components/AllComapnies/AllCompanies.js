import React, { Component } from 'react'
import SingleCompany from '../SingleElement/SingleElement'

export class AllCompanies extends Component {
    render() {
        return (
            <div>
                These are all the comapnies  
                <SingleCompany/>
                <SingleCompany/>
                <SingleCompany/>
            </div>
        )
    }
}

export default AllCompanies
