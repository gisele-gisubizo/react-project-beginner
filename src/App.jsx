import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import Layout from './components/layout'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Vendors from './components/Vendors'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
<Routes>

     <Route path='/' element={<Layout/>}> 
     <Route path='/Home'  index element={<Home/>}/>
     <Route path='/Shop'  Shop element={<Shop/>}/>  
     <Route path='/Vendors'  Vendors element={<Vendors/>}/> 
     <Route path='/Footer'  Footer element={<Footer/>}/> 

     </Route>
     
       
    
</Routes>

   </BrowserRouter>
  )
}

export default App
