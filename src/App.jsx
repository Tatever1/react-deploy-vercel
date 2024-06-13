import { Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import { HomePage } from "./components/HomePage";
import { Schedule } from "./components/Schedule";

export function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Schedule/>
  
    </div>


  )
}

