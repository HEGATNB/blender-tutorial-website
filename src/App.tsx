import { useState } from 'react'
import './App.css'
import Navbar from './components/navigation.tsx'
import AboutUs from './pages/MainPage.tsx'
import Settings from './pages/SettingsPage.tsx'
import Account from './pages/AccountPage.tsx'
import Subscription from './pages/SubscriptionInfo.tsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
      <div className = "main-content">
         <Navbar />
         <Routes>
             <Route path="/" element={<AboutUs />} />
             <Route path="/settings" element={<Settings />} />
             <Route path="/account" element={<Account />} />
             <Route path= "/subscription" element={<Subscription />} />
         </Routes>
      </div>
  )
}

export default App
