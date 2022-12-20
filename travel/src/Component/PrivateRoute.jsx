
import { AuthContaxt } from "../Contaxt/AuthContaxt";
import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {isAuth} = React.useContext(AuthContaxt)
    if(!isAuth){
        return <Navigate to='/signin' />
    }
    return children
}

export default PrivateRoute;