import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext"

export const Navbar = () => {
        const {isAuth} = useContext(AuthContext)
    return (<div>
        <Link to="/">Home</Link>
        <Link to="/employees">EmployeeList</Link>
        <Link to="/Admin">Admin</Link>
        <Link to={isAuth ? "/logout" : "/login"} >{isAuth ? "Logout" : "Login"}</Link>
    </div>)
}