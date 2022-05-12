import { useState } from 'react'
import './App.css'
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import { EmployeeDetails } from './components/EmployeeDetails'
import { EmployeeList } from './components/EmployeeList'
import { Admin } from './components/Admin'

import {Routes,Route} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/employees/:id" element={<EmployeeDetails />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>

      </Routes>
    </div>
  )
}

export default App
