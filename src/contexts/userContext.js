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
        <UserContext.Provider value={{userDetails, userInfo, userEducation, userSkills, userPortfolio, userSocialmedialink, updateUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider