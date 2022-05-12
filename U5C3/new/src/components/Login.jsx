import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext";
//we can take both var and func from the context

export const Login = () => {
    
    const { handleAuth } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <form onSubmit={() => {
            handleAuth(true)
            // setting handleAuth to true as we are loggin in
            //function here to login,
            navigate("/",{replace:true})
        }}>
            <input type="text" name="username" placeholder="Enter UserName" /> 
            {/* Name */}
            <input type="text" name="password" placeholder="Enter Password" />
            {/* Password */}
            <input type="submit" value="SIGN IN" />
        </form>
    )

}