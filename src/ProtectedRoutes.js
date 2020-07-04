import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthUser, userDetails, ...rest }) => {
  const test = true
  return (
    <Route {...rest} render={
      props => {
        if(test){
          return <Component {...rest} {...props} userDetails={userDetails}/>
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