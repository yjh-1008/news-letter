import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx';
import QuestionPage from './pages/QuestionPage.tsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/question/:step" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
