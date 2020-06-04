import React, { useState, createContext } from 'react';
import axios from 'axios'
import { v4 as uuidv4} from 'uuid'

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
    const [ userInfo, setUserInfo ] = useState("") // to be change into an object 
    const [ userEducation, setUserEducation] = useState("")
    const [ userSkills, setUserSkills] = useState([])
    const [ userPortfolio, setUserPortfolio] = useState([])
    const [ userSocialmedialink, setUserSocialmedialink] = useState([])


    const [isAuth, setAuth ] = useState(false)
    

    const signIn = (email, password ) => {

        axios.get('http://www.mocky.io/v2/5ed1479c350000d4f3ffa424')
             .then(res => {
                 let users = res.data
                 const userExist = users.filter(user => user.email === email && user.password.toString() === password)
                if(userExist < 1){
                    alert('Please sign up') 
                } else {
                    const user = userExist[0]
                    const {  id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered,education } = user
                    const { info } = user
                    const { skills } = user
                    const { portfolio } = user
                    const { socialmedialink } = user

                    setUserDetails(prevState => {
                        return { ...prevState, id, username,password,picture, country , age ,name,gender, company,email,phone,address, about,registered}
                    })
                    setUserInfo(info) 
                    setUserEducation(education)
                    setUserSkills([...userSkills, skills])
                    setUserPortfolio([...userPortfolio, portfolio]) 
                    setUserSocialmedialink([...userSocialmedialink,socialmedialink]) 

                    setAuth(true)
                } 
             })
             .catch(error => console.log(error))

    }


    const signUpUser = (fullname,country, gender, password) => {

        // sign up user
        const newUser = {
            _id : uuidv4(),
            username : fullname,
            password,
            picture : "",
            country,
            age : 0,
            name : "",
            gender,
            company : "",
            email : "",
            phone : "",
            address : "",
            about : "",
            registered : Date(),
            info : [],
            education : "",
            skills : [],
            portfolio : [],
            socialmedialink : []
        }


        
        
        axios.post('http://www.mocky.io/v2/5ed1479c350000d4f3ffa424', newUser)
             .then(res => {
                 console.log(res.data)
                 
            })
             .catch(error => console.log(error))

             console.log(newUser)
        
    }
    const signUpCompany = (companyName,counrty, password) => {
        // sign up user
        console.log(companyName,counrty,password)
    }

    const updateUser = () => {
        // update user 
    }

    const deleteUser = (id, email,password) => {
        // delete user 
    }



    return (
        <UserContext.Provider value={{userDetails, userInfo, userEducation, userSkills, userPortfolio, userSocialmedialink, isAuth, signIn, signUpUser,signUpCompany, updateUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider