import { useEffect } from "react";
import { useState } from "react";
import { Body } from "./Body";

export const ShowStudents = () => {
  const [StudentData, setStudentData] = useState([]);
  const [Sort, setSort] = useState({
    sortby: "first_name",
    sortorder: "asc",
  });

  const handleChange = (e) => {
      console.log(e.target.value);
    setSort({
      ...Sort,
      [e.target.name]: e.target.value,
    });
  };
  const handleSort = () => {
    let data = [...StudentData];
    // on clicking the sort button
    if (Sort.sortby === "gender" && Sort.sortorder === "asc") {
      data.sort((a, b) => a.gender.localeCompare(b.gender));
    } else if (Sort.sortby === "gender" && Sort.sortorder === "desc") {
      data.sort((b, a) => a.gender.localeCompare(b.gender));
    } else if (Sort.sortby === "first_name" && Sort.sortorder === "asc") {
      data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    } else if (Sort.sortby === "first_name" && Sort.sortorder === "desc") {
      data.sort((b, a) => a.first_name.localeCompare(b.first_name));
    } else if (Sort.sortby === "age" && Sort.sortorder === "asc") {
      data.sort((a, b) => (a.age > b.age ? 1 : -1));
    } else if (Sort.sortby === "age" && Sort.sortorder === "desc") {
      data.sort((b, a) => (a.age > b.age ? 1 : -1));
    } else if (Sort.sortby === "tenth_score" && Sort.sortorder === "asc") {
      data.sort((a, b) => (a.tenth_score > b.tenth_score ? 1 : -1));
    } else if (Sort.sortby === "tenth_score" && Sort.sortorder === "desc") {
      data.sort((b, a) => (a.tenth_score > b.tenth_score ? 1 : -1));
    } else if (Sort.sortby === "twelth_score" && Sort.sortorder === "asc") {
      data.sort((a, b) => (a.twelth_score > b.twelth_score ? 1 : -1));
    } else if (Sort.sortby === "twelth_score" && Sort.sortorder === "desc") {
      data.sort((b, a) => (a.twelth_score > b.twelth_score ? 1 : -1));
    }
    setStudentData(data);
  };

  // fetching data from server and displaying in table
  useEffect(
    () => {
      fetch("http://localhost:8080/students")
        .then((res) => res.json())
        .then((data) => {
          // sorting the data according to first name in ascending order
          data.sort((a, b) => a.first_name.localeCompare(b.first_name));
          console.log(data);
          setStudentData(data);
        });
    },
    [] // using once
  );

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            name="sortby"
            onChange={handleChange}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            name="sortorder"
            onChange={handleChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handleSort}>
          sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {StudentData.map((e) => {
            return <Body data={e} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
