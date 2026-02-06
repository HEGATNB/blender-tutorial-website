import { useState } from 'react'
import './App.css'
import Navbar from './components/navigation.tsx'
import AboutUs from './pages/MainPage.tsx'
import Settings from './pages/SettingsPage.tsx'
import Account from './pages/AccountPage.tsx'
import Practice from './pages/PracticePage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className = "main-content">
         <Navbar />
         <Routes>
             <Route path="/" element={<AboutUs />} />
             <Route path="/settings" element={<Settings />} />
             <Route path="/account" element={<Account />} />
             <Route path= "/practice" element={<Practice />} />
         </Routes>
      </div>
  )
}

export default App