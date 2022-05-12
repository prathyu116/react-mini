import { useContext,useState,useEffect } from "react";
import { useParams } from 'react-router-dom'
//it take data from the link
// http:localhost:8080/employees/5
// useParams take the 5 from the link and give you to use it,
// http:localhost:8080/employees/shiv
//id = shiv
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext"
//axios
import axios from 'axios'

export const EmployeeDetails = () => {
    const [employee,setEmployee] = useState({})
    const { id } = useParams()
    const { isAuth } = useContext(AuthContext)

    useEffect(() => {
        getData()
    },[])

    async function getData() {
        const data = await fetch(`http://localhost:8080/employee/${id}`).then((d) => d.json())
        setEmployee(data)
    }
//we can go to this data, BUT, here is a catch, in C3, it was asked for people to login first before accessing the details, 
    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    const handleTerminate = () => {
        axios.patch(`http://localhost:8080/employee/${id}`, {
    ...employee,"status":"terminated"
    })
    .then(function (response) {
    setEmployee(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
    }

    return (<div>
        <div><img src={employee.image} alt="" /></div>
        <div>{employee.employee_name}</div>
        <div>{employee.tasks}</div>
        <div>{employee.title}</div>
        <div>{employee.status == "working" ? <button onClick={()=>handleTerminate()}>TERMINATE</button>:<div>Terminated</div>}</div>
    </div>)
    
}
