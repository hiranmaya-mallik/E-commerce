import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => { 
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='help-center' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App