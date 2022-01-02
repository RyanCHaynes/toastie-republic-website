import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
