import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Signin from './pages/signup/Signup';
import Signup from './pages/signup/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

