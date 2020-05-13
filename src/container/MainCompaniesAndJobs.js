import React, { Component } from 'react'
import AllCompanies from '../components/AllComapnies/AllCompanies'
import AllUsers from '../components/AllUsers/AllUser'


export class MainCompaniesAndJobs extends Component {
    render() {
        return (
            <div style = {{backgroundColor : 'blue'}}>
                <AllCompanies/>
                 ||
                <AllUsers/>
            </div>
        )
    }
}

export default MainCompaniesAndJobs
