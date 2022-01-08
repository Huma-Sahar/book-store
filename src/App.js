import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom'
import List from './component/List'
import About from './component/About'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
