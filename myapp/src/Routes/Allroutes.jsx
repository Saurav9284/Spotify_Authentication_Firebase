import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Homepage from '../Pages/Homepage';

const Allroutes = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Homepage/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
