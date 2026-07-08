import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import './styles/responsive.css'
import { router } from './router'




const routes = router;


function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
