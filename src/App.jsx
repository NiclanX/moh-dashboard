import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard'
import ProtectedRoute from './services/ProtectedRoute'




function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<ProtectedRoute> <Dashboard/></ProtectedRoute>} />          
      </Routes>
    </BrowserRouter>
  )
}

export default App
