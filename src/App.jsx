import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Country from './Components/Country'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {

  const navigation = useNavigation()
  if(navigation.state == 'loading') return <div className='loaderdiv'><p className='loader'></p></div>
  return (
    <>
   <Header />
   <Outlet />
   <Footer />
    </>
  )
}

export default App
