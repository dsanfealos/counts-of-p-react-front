import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Character from './components/Character'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />    
        <Header />
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/character' Component={Character}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
