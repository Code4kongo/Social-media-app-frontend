import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthUser, userDetails, ...rest }) => {
  // console.log(isAuthUser, userDetails)
  console.log(isAuthUser)
  return (
    <Route {...rest} render={
      props => {
        if(isAuthUser){
          return <Component {...rest} {...props} />
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