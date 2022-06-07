

import './App.css'
import {List} from "./components/list"
import {Routes,Route,} from "react-router-dom";
import {Home} from "./components/home"
function App() {
 

  return (
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/list" element={<List/>} />
     
    </Routes>
       
          
    </div>
  )
}

export default App
