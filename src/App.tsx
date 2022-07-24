import React from 'react'

// React-Router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Component
import Login from './components/login/Login'
import Cadastry from './components/login/Login'
import Home from './components/home/Home'
import { Provider } from 'react-redux'

// Styles
import './sass/global.scss'


function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Login />}/>
          <Route path={'/login'} element={<Login />}/>
          <Route path={'/cadastry'} element={<Cadastry />}/>
        </Routes> 
      </Router>
    </div>
  )
}

export default App
