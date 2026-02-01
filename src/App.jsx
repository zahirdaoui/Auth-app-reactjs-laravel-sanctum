import './App.css'
import Login from './pages/login'
import { Routes , Route } from 'react-router-dom'
import Register from './pages/register'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="login" element={<Login/>} />
           <Route path="register" element={<Register/>} />
        </Routes>

      </div>
    </>
  )
}

export default App
