import React, { Component } from 'react'
import AllCompanies from '../../components/AllComapnies/AllCompanies'
// import AllUsers from '../../components/AllUsers/AllUser'


export class MainCompaniesAndJobs extends Component {
    render() {
        return (
            <section className="companies-info">
			<div className="container">
                <AllCompanies/>
            </div>
            </section>
        )
    }
}

export default MainCompaniesAndJobs
