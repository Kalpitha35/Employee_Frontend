import './App.css'
import Landing from './components/Landing'
import Home from './pages/Home'
import Add from './pages/Add'
import Update from './components/Update'

import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
   

     <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
     </>
 
  )
}

export default App
