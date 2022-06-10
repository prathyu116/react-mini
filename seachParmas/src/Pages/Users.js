import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Users.css";
import { Link, useSearchParams , useNavigate } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState([]);
  const [searchPrams, setsearchPrams] = useSearchParams();
    const navigate = useNavigate();

  const cls = searchPrams.get("class");
  console.log(cls);

  useEffect(() => {
    axios("data.json").then((response) => {
      setData(response.data);
    });
  }, []);
  const handleChange = (e) => {
    setsearchPrams({ class: e.target.value });
  };

  return (
    <div className="page users">
      <select onChange={handleChange}>
        <option value="6">6</option>
        <option value="1">1</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      {data
        .filter((itm) => {
          if (!cls) return true; //null anel ellam kanikkuva
          return cls === itm.class;
        })
        .map((item) => {
          return (
            <div className="users-item" key={item.id} onClick={()=>{
                navigate(`/details/${item.id}`);
            }}>
              <div className="title">
                <Link to={`/details/${item.id}`}>{item.name}</Link>
              </div>
              <div className="descr">{item.address}</div>
              <div>{item.class}</div>
            </div>
          );
        })}
    </div>
  );
}
