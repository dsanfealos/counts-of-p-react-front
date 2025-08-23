import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import CharacterPage from './components/pages/CharacterPage'
import WeaponsPage from './components/pages/WeaponsPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />    
        <Header />
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/character' Component={CharacterPage}/>
          <Route exact path='/weapon' Component={WeaponsPage}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
