import './App.css'
import Login from './pages/login'
import { Routes , Route } from 'react-router-dom'
import Register from './pages/register'
import Profile from './pages/profile'

function App() {



  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>

      </div>
    </>
  )
}

export default App
