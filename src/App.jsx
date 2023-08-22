import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import * as Pages from './pages'
import { NavBar } from './components'
import './App.css'

function App() {

  return (
    <div>
        <Routes>
        {/* <Route path='/' element={<NavBar />}> */}
          <Route path = '/' element={<Pages.Home />}/>
          <Route path="/Projects" element={<Pages.Projects/>}/>
          <Route path = "/Projects/:id" element = {<Pages.Project />}/>
          {/* <Route path="/Contact" element={<Pages.Contact/>}/> */}
          {/* <Route path="/NotFound" element={<Pages.NotFound/>}/> */}
        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App
