import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {useLocation} from "react-router-dom";
import "./list.css"
export const List=()=>{
  const search = useLocation().search;
  const page = new URLSearchParams(search).get('page')||1
  const pagesize=new URLSearchParams(search).get('pagesize')||5
  const filter=new URLSearchParams(search).get('filter')||"all"
  const sort=new URLSearchParams(search).get('sort')||1
  const navigate=useNavigate()
    const [Data,setData]=useState([])
    let pages=[]
    if(Data.length!=0){
    for(var i=1;i<=Data.total_pages;i++){
        pages.push(i)
    }
}
    useEffect(()=>{
       getData()
    },[page,filter,sort])
  
    const getData=async()=>{
        try {
            let res=await fetch(`http://localhost:1200/movies/list?page=${page}&pagesize=${pagesize}&filter=${filter}&sort=${sort}`)
            let data=await res.json()
            setData(data)
        } 
        catch (error) {
            console.log(error)
        }
    }
    

    return (
        <div>
            <Button variant="contained">Filter</Button>
            <select style={{height:'36px',marginLeft:'10px',marginRight:'10px'}} value={filter} onChange={(e)=>{
                
                navigate(`/list?page=1&pagesize=5&filter=${e.target.value}&sort=${sort}`)}}>
               <option value="all">all</option>
               <option value="series">Series</option>
               <option value="movie">Movies</option>
            </select>
            <Button variant="contained">Sort</Button>
            <select style={{height:'36px',marginLeft:'10px',marginRight:'10px'}} value={sort} onChange={(e)=>navigate(`/list?page=1&pagesize=5&filter=${filter}&sort=${e.target.value}`)}>
                  <option value="1">Year(Ascending)</option>
                  <option value="-1">Year(Decending)</option>
            </select>

           <div className="mainDiv">
               {Data.length!=0 ? Data["list"].map((ele)=>{
                   return (<div key={ele._id} className="inDiv" >
                       <img src={ele.Poster}/>
                       <p>{ele.Title}</p>
                       <p>{ele.Year}</p>
                       <p>{ele.Type}</p>
                   </div>)
               }):null}
           </div>
            <div>
                {pages.length!=0 ?pages.map((e)=>{
                    
                    return Number(page)===e ?<Button  key={e}  variant="contained" disabled>{e}</Button> :<Button onClick={()=> navigate(`/list?page=${e}&pagesize=5&filter=${filter}&sort=${sort}`)} key={e}  variant="contained">{e}</Button>
                }):null}
            </div>

        </div>

       )
    
}