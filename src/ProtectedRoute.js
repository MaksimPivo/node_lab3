import React from 'react';
import Tables from './Tables';

const ProtectedRoute = (props) => {
  if(props.logins){
    return <Tables/>
  } else{
    window.location.href = '/'
  };
}

export default ProtectedRoute;