import React, { createContext } from 'react';
import axios from 'axios'

export const  CompanyContext = createContext()

const CompanyContextProvider = props => {

    const updateCompany = () => {   
    }
    const deleteCompany = (companyId) => {
        axios.delete(`http://localhost:8080/company/${companyId}`)
            .then(res => {
                console.log("Company detele imeediately signout")
            })
            .catch(error => console.log("An Error occured"))
    }

    return (
        <CompanyContext.Provider value={{ updateCompany, deleteCompany }}>
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContextProvider