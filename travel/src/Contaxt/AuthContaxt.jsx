import React from "react"
export  const AuthContaxt = React.createContext();
const AuthContaxtProvider = ({children}) => {
    const[isAuth,setIsAuth] = React.useState(false);
    const togleAuth = () => {
        setIsAuth(!isAuth)
    }
    console.log(isAuth)
    return (
        <AuthContaxt.Provider value={{isAuth,togleAuth}}>
            {children}
        </AuthContaxt.Provider>
    )
}

export default AuthContaxtProvider