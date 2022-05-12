import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./CounterFeature/reducer";
import { TodoReducer } from "./TodoFeature/reducer";

const rootReducer = combineReducers({
  Mycounter: counterReducer,
  Mytodos: TodoReducer,
});

// function middleware(store) {
//   return function (next) {
//     return function (action) {
//       console.log("act", action);
//     };
//   };
// }
// const middleware1 = (store)=>(next)=>(action)=>{
//     console.log("EN-M1");
//     next(action)
//     console.log("EX-M1");

// }
// const middleware2 = (store)=>(next)=>(action)=>{
//       console.log("EN-M2");
//       next(action);
//       console.log("EX-M2");
// }
 
// const middleware = (store)=>(next)=>(action)=>{
//       console.log("EN-M2",store);
//       if(typeof action === "function"){
//          return action(store.dispatch);
//       }
//       next(action);
// }

//ivdea second argument anu initial state
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(()=>{
//     console.log(store.getState());
// })
//{ counter: 0,todos:[]

console.log("----->", store.getState());
