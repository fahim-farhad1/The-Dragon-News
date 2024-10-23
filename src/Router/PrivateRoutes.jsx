import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    if(loader){
      return  <span className="loading loading-spinner text-primary"></span>
    }
    if(user){
        return children
    }
  return <Navigate to={'/login'}></Navigate>
}

PrivateRoutes.propTypes = {
children: PropTypes.node
}

export default PrivateRoutes
