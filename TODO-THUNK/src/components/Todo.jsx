import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, getTodos, sort, toggleTodo } from "../Redux/TodoFeature/action";

const Todo = () => {
  const state = useSelector((store) => store.Mytodos.todos);

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");

  const handleAdd = () => {

    const payload = {
      title: text,
      status: false,
    };

    fetch("http://localhost:5000/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => {
        dispatch(getTodos());
      })
      .then(() => {
        setText("");
      });
  };
  useEffect(() => {
    dispatch(getTodos());
  }, []);


  return (
    <div>
      <input type="text"  onChange={(e)=>{
        setFilter(e.target.value)
      }}/>
      <select onChange={(e)=>{
        dispatch(sort(e.target.value))
      }}>
        <option value="id">sort by id</option>
        <option value="status">sort by status</option>
        <option value="title">sort by name</option>
      </select>
      <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      {state.filter((todo)=>todo.title.includes(filter)).map((t) => {
        return (
          <>
            <div key={t.id}>
              {t.id} {t.title}-{t.status ? "Done" : "Not Done"}
              <button onClick={()=>{
                dispatch(deleteTodo(t.id))
              }}>Del</button>
              <button onClick={()=>{
                dispatch(toggleTodo(t.id))
              }}>toggle</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Todo;
