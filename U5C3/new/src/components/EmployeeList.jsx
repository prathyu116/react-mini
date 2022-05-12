import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
export const EmployeeList = () => {
    const [employees, setEmploy] = useState([])
    
    useEffect(() => {
        getData()
    },[])
//empty dependency array, this array defines the vriable on change on which the useEffect will reload, if it empty, it will reload at the start only,
    
    async function getData() {
        const data = await fetch("http://localhost:8080/employee").then(d => d.json());
        setEmploy(data)
        // console.log(data)
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            marginTop: "30px"
        }}>
            {employees.map((e) => (
                <Link to={`/employees/${e.id}`}>
                <div key={e.id}>
                    <img src={e.image} alt="" />
                    <div>
                    {e.employee_name}
                    </div>
                    <div>{e.title}</div>
                </div>
                </Link>
            ))}
            </div>
    )
}