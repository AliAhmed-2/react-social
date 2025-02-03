import { useState } from 'react'

import './App.css'
import Signup from './signup'
import Nav from './nav'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Login from './login'
import Home from './home'
import { initializeApp } from 'firebase/app';

function App() {
  const [count, setCount] = useState(0)


  const firebaseConfig = {
    apiKey: "AIzaSyDcog6itVXUDTRCMVyLUn9p_LDi79W0S_I",
    authDomain: "social-app-6bfc2.firebaseapp.com",
    projectId: "social-app-6bfc2",
    storageBucket: "social-app-6bfc2.firebasestorage.app",
    messagingSenderId: "497661125540",
    appId: "1:497661125540:web:d2e24f6a3e8cfd0f051731"
  };
  
  const app = initializeApp(firebaseConfig);

  return (
    <>
    <Nav />
   
      <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/Home" element={ <Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      
    </>
  )
}

export default App
