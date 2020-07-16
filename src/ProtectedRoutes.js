import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, userDetails,  companyDetails ,...rest }) => {
  
  return (
    <Route {...rest} render={
      props => {
        if(isAuth || !isAuth){
          return <Component 
                      {...rest}   
                      {...props} 
                      userDetails={userDetails} 
                      companyDetails={companyDetails}/>
        }else {
          return <Redirect to={
            { 
              pathname : '/unauthorized',
              state : props.location
            }
          }
          />
        }
      }
    } />
  )
}

export default ProtectedRoute;