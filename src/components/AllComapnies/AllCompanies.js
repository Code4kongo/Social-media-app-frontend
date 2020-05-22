import React, { Component } from 'react'
import SingleCompany from '../SingleElement/SingleElement'

export class AllCompanies extends Component {
    render() {
        return (        
            <div className="companies-list">
                    <div className="row">
                        <SingleCompany/>
                        <SingleCompany/>
                        <SingleCompany/>
                        <SingleCompany/>
                        <SingleCompany/>
                        <SingleCompany/>
                        <SingleCompany/>
                        <SingleCompany/>
                        <SingleCompany/>
                    </div>
            </div>
        )
    }
}

export default AllCompanies
