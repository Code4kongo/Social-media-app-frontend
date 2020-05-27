import React, { useState, useEffect, createContext } from 'react';
// import axios from 'axios'

export const  UserContext = createContext()

const UserContextProvider = props => {

    const [userDetails, setUserDetails] = useState([{
        id : "21",
        username: "23",
        password: "23",
        profil: "23",
        country: "23",
        date_of_birth: "23",
        name: "23",
        gender: "female",
        company: "23",
        email: "23",
        phone: "23",
        address: "23",
        about: "23",
        registered: "23",
    }])

    const [userInfo, setUserInfo] = useState([
        {
            overview : "",
            experiences : []
        }
    ])

    const [userEducation, setUserEducation ] = useState([
        {
            education : [],
            skills : []
        }
    ])

    const [userPortfolio, setuserPortfolio] = useState([{
        images : [],
        socialMediaLinks : []
    }])

    const signIn = (email, password ) => {
        // signUser In
        console.log("Hello from sign in")
    }

    const signUp = (id, username, password,profil, country, date_of_birth, name, gender, email, phone,address, about,registered ) => {
        // sign up user
    }

    const updateUser = () => {
        // update user 
    }

    const deleteUser = (id, email,password) => {
        // delete user 
    }



    return(
        <UserContext.Provider value={{userDetails, userInfo, userEducation, userPortfolio, signIn, signUp, updateUser, deleteUser}}>
            {props.children}
        </UserContext.Provider>)
}

export default UserContextProvider