import { useState } from 'react'
 import Navbar from './components/navbar'
 import Home from './components/Home'
 import Layout from './components/layout'
 import Footer from './components/Footer'
 import Shop from './components/Shop'
 import Vendors from './components/Vendors'
 import Blog from './components/Blog'
 import Contact from './components/Contact'
 import Login from './components/Login'



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
    <Route path='/Blog'  Blog element={<Blog/>}/> 
<Route path='/Contact'  Contact element={<Contact/>}/>
  
    
  

    </Route>
   
      <Route path='/Login'  Login element={<Login/>}/>  
     
     
</Routes>

   </BrowserRouter>



  )
}

export default App
