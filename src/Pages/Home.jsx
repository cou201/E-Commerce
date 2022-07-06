import  Slider  from '../Components/Slider'
import React from 'react'
import Announce from '../Components/Announce'
import NavBar from '../Components/NavBar'
import Categories from "../Components/Categories"
import Products from '../Components/Products'
import NewLetter from '../Components/NewLetter'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
     <Announce/>
     <NavBar/>
     <Slider/>
     <Categories/>
     <Products/>
     <NewLetter/>
     <Footer/>
    </div>
  )
}

export default Home