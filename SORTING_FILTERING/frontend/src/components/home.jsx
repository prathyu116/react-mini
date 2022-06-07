import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
export const Home=()=>{
    const navigate=useNavigate()
    return <Button onClick={()=> navigate("/list?page=1&pagesize=5&filter=all&sort=1")}  variant="contained">Go To Movies Page</Button>
}