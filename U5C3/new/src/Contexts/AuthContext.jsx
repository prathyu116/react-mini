import { createContext, useState } from "react";
//to access vaiables and function from anywhere in the app

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setAuth] = useState(false)
    
    const handleAuth = (state) => {
        setAuth(state)
    }
    
    return (
        <AuthContext.Provider value={{isAuth,handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
//isAuth will be a true/false state, it will tell your app that weather you have logged in or not, handleAuth is a function to toggle between true and false