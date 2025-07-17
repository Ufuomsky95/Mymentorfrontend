import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './auth/login'
import Profile from './pages/profile'



function App () {
  

  return (
    <BrowserRouter>
   <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>

   </Routes> 
   </BrowserRouter>
  )
}

export default App
