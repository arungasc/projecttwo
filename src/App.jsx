import React  from 'react'
import {Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Trainers from './Trainers'
import Account from './Account'
import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';


function App() {

  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/trainers' element={<Trainers/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
