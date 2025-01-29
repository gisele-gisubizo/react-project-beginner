import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import Layout from './components/layout'
import footer from './components/Footer'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
<Routes>

     <Route path='/' element={<Layout  />}>   <Route path='/'  index element={<Home/>}/> 
     <Route path='/'  Footer element={<Footer/>}/> 
     </Route>
     
       
    
</Routes>

   </BrowserRouter>
  )
}

export default App
