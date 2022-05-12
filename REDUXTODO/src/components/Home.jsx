import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../Redux/action';
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);
    const [input, setinput] = useState();


    const handleAdd = () => {
      dispatch(addTodo(input));
    };

    const handleDelete = (e) => {
        dispatch(deleteTodo(e.target.parentElement.id));
    }

    return (
        <>
            <input type={"text"} onChange={(e)=> setinput(e.target.value)}></input>
            <button   onClick={handleAdd}>Add</button>
            {todos.map((e) => {
                return (
                    <div className='list'
                        key={e.id}
                        id={e.id}>
                        <Link
                            className={e.status ? "todo-done" : "todo-notdone"}
                            to={`/todo/${e.id}`}
                        >
                            {e.title}
                        </Link>
                        <button
                            onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                )
            })}
        </>
    )
}




    // const navigate = useNavigate();
    // const gotoTodo = (e) => {
    //   const path = "/todo/" + e.target.parentElement.id;
    //   navigate(path);
    // };