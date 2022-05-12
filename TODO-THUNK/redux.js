
// Declarative code
// Pure function
//    1. always accept and always return
//    2. no mutation
//    3. no global states
//    4. calling same function again, should always give same result: Idempotency


const init ={ counter: 0 }
// Actions
const  InCount = { type: "ADD_COUNT", payload: 1 }
const reducer = (store,{type,payload})=>{
    switch (type){
        case "ADD_COUNT":
            return {counter:store.counter + payload}
        default:
            return store
    }
}
class Store {
  constructor(reducer, innit) {
    this.reducer = reducer;
    this.store = innit;
  }
  getState() {
    return this.store;
  }
  dispatch(action){
    this.store = this.reducer(this.store,action)
  }
}
const Mystore = new Store(reducer,init)
// console.log(Mystore.reducer);
console.log(Mystore.getState());
Mystore.dispatch(InCount);
console.log(Mystore.getState());
Mystore.dispatch(InCount);
console.log(Mystore.getState());
