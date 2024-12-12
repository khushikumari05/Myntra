// import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import CatgoriesSlider from './components/CatgoriesSlider'
import CatgoriesSlider2 from './components/CatgoriesSlider2'
import Footer from './components/Footer'
import Header from "./components/Header";

// import Login from './components/Login'

function App() {

  return (
    <>
    <Header />
    {/* <Login /> */}
    <Banner />
    <CatgoriesSlider />
    < CatgoriesSlider2/>
    <Footer />
    </>
  )
}

export default App
