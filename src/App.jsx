import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/responsive.css'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard'
import ProtectedRoute from './services/ProtectedRoute'
import NoWhere from './Components/NoWhere'
import MainLayout from './Components/MainLayout'
import UsersPage from './Components/UsersPage'





function App() {
  return (
    <>
    <BrowserRouter>     
      <Routes>        
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />        
        <Route path='/users' element={<UsersPage/>} />        
        <Route path='/' element={<Dashboard/>} />        
        <Route path='*' element={<NoWhere/>}/>         
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
