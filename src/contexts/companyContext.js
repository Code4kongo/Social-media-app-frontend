import React, { useState, createContext } from 'react';
import axios from 'axios'

export const  CompanyContext = createContext()

const CompanyContextProvider = props => {

    const [ companyDetails, setCompanyDetails ] = useState({
        _id : "",
        company : "",
        password : "",
        picture : "",
        country : "",
        createdAt : "",
        email : "",
        phone : "",
        address : "",
        about : "",
        registered : "",
    })
    const [ companyInfo, setCompanyInfo ] = useState({
        overview : "",
        awards : ""
    }) 
    const [ companySkills, setCompanySkills] = useState([])
    const [ companyPortfolio, setCompanyPortfolio] = useState([])
    const [ companySocialmedialink, setCompanySocialmedialink] = useState([])
    const [isAuth, setAuth ] = useState(false)
    

    const signInCompany= (email, password ) => {

        axios.post('http://localhost:8080/company/login', {email, password})
             .then(res => {
                let ExistingCompany = res.data.company[0]
                const {  _id, company,password,picture, country , createdAt, email, phone, address, about,registered } = ExistingCompany
                const { overview, awards } = ExistingCompany.info
                const { skills } = ExistingCompany
                const { portfolio } = ExistingCompany
                const { socialmedialink } = ExistingCompany

                console.log(ExistingCompany)

                    setCompanyDetails(prevState => {
                        return { ...prevState, _id, company,password,picture, country , createdAt ,email,phone,address, about,registered}
                    })
                    setCompanyInfo(prevState => {
                        return {...prevState,overview,awards}
                    }) 
                    setCompanySkills([...companySkills, skills])
                    setCompanyPortfolio([...companyPortfolio, portfolio]) 
                    setCompanySocialmedialink([...companySocialmedialink,socialmedialink]) 
                    setAuth(true)
             })
             .catch(error => console.log(error))

    }
    const signUpCompany= (email,country, password) => {

        const newCompany =  {
            company : "",
            password,
            picture: "",
            country,
            createdAt : Date().toString(),
            email,
            phone: "",
            address:  "",
            about:  "",
            total_number_employee : 0,
            info: {
                overview : "",
                awards : []
            },
            skills: "",
            portfolio: [],
            socialmedialink: []   
          }
        console.log(newCompany)
        
        axios.post('http://localhost:8080/company/signup', newCompany)
            .then(res => {
                let existingCompany = res.data.createdCompany
                console.log(existingCompany)
                const {  _id, company, password,picture, country , createdAt ,email, phone, address, about, registered } = existingCompany
                const { overview, awards } = existingCompany.info
                const { skills } = existingCompany
                const { portfolio } = existingCompany
                const { socialmedialink } = existingCompany

                    setCompanyDetails(prevState => {
                        return { ...prevState, _id, company, password, picture, country , createdAt, email, phone, address, about, registered}
                    })
                    setCompanyInfo(prevState => {
                        return {...prevState,overview,awards}
                    }) 
                    setCompanySkills([...companySkills, skills])
                    setCompanyPortfolio([...companyPortfolio, portfolio]) 
                    setCompanySocialmedialink([...companySocialmedialink,socialmedialink]) 
            })
             .catch(error => console.log(error))
        
    }
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
        <CompanyContext.Provider value={{companyDetails, companyInfo, companySkills, companyPortfolio, companySocialmedialink, isAuthCompany : isAuth , signInCompany, signUpCompany, updateCompany, deleteCompany }}>
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContextProvider