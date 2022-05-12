import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext";

export const Logout = () => {
    const { handleAuth } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            handleAuth(false)
            navigate("/",{replace:true})}}>Logout</button>
    )
}