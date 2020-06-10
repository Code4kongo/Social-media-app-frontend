import React, { useState, createContext } from 'react';
import axios from 'axios'

export const  UserContext = createContext()

const UserContextProvider = props => {

    const [ userDetails, setUserDetails ] = useState({
        _id : "",
        username : "",
        password : "",
        picture : "",
        country : "",
        age : 0,
        name : "",
        gender : "",
        company : "",
        email : "",
        phone : "",
        address : "",
        about : "",
        registered : "",
    })
    const [ userInfo, setUserInfo ] = useState({
        overview : "",
        experience : ""
    }) 
    const [ userEducation, setUserEducation] = useState("")
    const [ userSkills, setUserSkills] = useState([])
    const [ userPortfolio, setUserPortfolio] = useState([])
    const [ userSocialmedialink, setUserSocialmedialink] = useState([])
    const [isAuth, setAuth ] = useState(false)
    

    const signInUser = (email, password ) => {

        axios.post('http://localhost:8080/user/login', {email, password})
             .then(res => {
                let user = res.data.user[0]
                const {  _id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered,education } = user
                const { overview, experience } = user.info
                const { skills } = user
                const { portfolio } = user
                const { socialmedialink } = user

                    setUserDetails(prevState => {
                        return { ...prevState, _id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered}
                    })
                    setUserInfo(prevState => {
                        return {...prevState,overview,experience}
                    }) 
                    setUserEducation(education)
                    setUserSkills([...userSkills, skills])
                    setUserPortfolio([...userPortfolio, portfolio]) 
                    setUserSocialmedialink([...userSocialmedialink,socialmedialink]) 
                    setAuth(true)
             })
             .catch(error => console.log(error))

    }
    const signUpUser = (email,country, gender, password) => {

        const newUser =  {
            username: "",
            password,
            picture: "",
            country,
            age: 0,
            name: "",
            gender,
            company: "",
            email,
            phone: "",
            address: "",
            about:  "",
            info: {
                overview : "",
                experience : ""
            },
            education: "",
            skills: [],
            portfolio: [],
            socialmedialink: []
          }

        
        axios.post('http://localhost:8080/user/signup', newUser)
            .then(res => {
                let user = res.data.createduser
                const {  _id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered,education } = user
                const { overview, experience } = user.info
                const { skills } = user
                const { portfolio } = user
                const { socialmedialink } = user

                    setUserDetails(prevState => {
                        return { ...prevState, _id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered}
                    })
                    setUserInfo(prevState => {
                        return {...prevState,overview,experience}
                    }) 
                    setUserEducation(education)
                    setUserSkills([...userSkills, skills])
                    setUserPortfolio([...userPortfolio, portfolio]) 
                    setUserSocialmedialink([...userSocialmedialink,socialmedialink]) 
            })
             .catch(error => console.log(error))
        
    }
    const updateUser = () => {
        
    }
    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8080/user/${userId}`)
            .then(res => {
                console.log("User detele imeediately signout")
            })
            .catch(error => console.log("An Error occured"))
    }

    return (
        <UserContext.Provider value={{userDetails, userInfo, userEducation, userSkills, userPortfolio, userSocialmedialink, isAuthUser : isAuth, signInUser, signUpUser, updateUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider