import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import SetAvatar from './pages/SetAvatar';
const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Chat />} />
      <Route path="/setAvatar" element={<SetAvatar />} />
    </Routes>
  )
}

export default App