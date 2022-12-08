import React from 'react'
import Loginform from './components/Forms/Loginform'
import Home from './components/Home/Home'
import { Routes,Route} from "react-router-dom";
import Addarticle from './components/Forms/Addarticle';
import Signup from './components/Forms/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Loginform/>}/>
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Routes>
        <Route path='/addarticle' element={<Addarticle/>}/>
      </Routes>
      
    </div>
  )
}

export default App
