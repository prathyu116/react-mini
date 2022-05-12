import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./action";
import { nanoid } from "nanoid";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, { title: payload, status: false, id: nanoid() }],
      };

    case DELETE_TODO:
      return {
        ...store,
        todos: [...store.todos.filter((e) => e.id !== payload)],
      };
    default:
      return store;

    case TOGGLE_TODO:
      const id = payload;
      return {
        ...store,
        todos: [
          ...store.todos.map((e) => {
            if (e.id === id) {
              e.status = !e.status;
              return e;
            }
            return e;
          }),
        ],
      };
  }
};
