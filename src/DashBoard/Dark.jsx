import React, { createContext, useState } from 'react'
import SideBar from './Sidebar'

// import { light } from '@mui/material/styles/createPalette'
export const ThemeContext = createContext("null")

function Dark() {
  const [theme, setTheme] = useState("light");


  const toggleTheme= () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider  value={{theme,toggleTheme}}>
    <div className='App' id='light' >

<SideBar/>

    </div>
    </ThemeContext.Provider>
  )
}

export default Dark