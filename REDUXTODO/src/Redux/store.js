import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer, {todos: []});





// export { store, reducer };

// store.subscribe(() => {
//     console.log("subscribe: ", store.getState());
// })

// console.log(store.getState())