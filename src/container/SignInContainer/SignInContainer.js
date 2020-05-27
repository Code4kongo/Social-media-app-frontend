import React , { useContext }from "react";
import SignIn from "../../components/SignIn/SignIn";
import { UserContext } from '../../contexts/userContext'

const SignInContainer  = () => {

  const { userDetails } = useContext(UserContext)
  console.log(userDetails)

  return ( 
    <div>
      <SignIn />
    </div>
   );
}
 
export default SignInContainer ;
