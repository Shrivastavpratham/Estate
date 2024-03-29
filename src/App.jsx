import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About.jsx';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sign-in" element={<Signin/>} />
        <Route path="/Sign-up" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
