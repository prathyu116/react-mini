import { ADD_TODO, DELETE_TODO, sort, SORT, TOGGLE_TODO } from "./action";
const init = { todos: [] };

export const TodoReducer = (store = init, { type, payload }) => {
  console.log(store.todos);
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: payload };
    case SORT:
      return { ...store, todos: [...store.todos].sort((a,b) => (a[payload] > b[payload]) ? 1 : ((b[payload] > a[payload]) ? -1 : 0)) };
    case DELETE_TODO:
      return {...store,todos:store.todos.filter((el)=>el.id !== payload)}
    case TOGGLE_TODO:
      return {
        ...store,
        todos:store.todos.map((ite)=> ite.id===payload ? {...ite,status:!ite.status} :ite)
      };
    default:
      return store;
  }
};
