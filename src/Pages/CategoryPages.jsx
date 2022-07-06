import React from 'react'
import Announce from '../Components/Announce'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import NewLetter from '../Components/NewLetter'
import Products from '../Components/Products'

const CategoryPages = () => {
  return (
    <div>
        <Announce/>
        <NavBar/>
        <div className='flex flex-col p-5'>
            <h1 className= "text-[30px]">Men's Cloth</h1>
            <div className= "flex items-center justify-between mt-3">
                <div className= "flex">
                    <p>Filter By</p>
                    <select className= "ml-3 border-2 border-silver">
                        <option selected disable>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select  className= "ml-3 border-2 border-silver">
                        <option selected disable>Color</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Red</option>
                    </select>
                </div>
                <div className="flex">
                    <p>Sort By</p>
                    <select className="ml-3 border-2 border-silver">
                         <option>Newset (First)</option>
                         <option>Oldset (First)</option>
                         <option>price (Asc)</option>
                         <option>Price (Des)</option>
                    </select>
                </div>
            </div>
        </div>
        <Products/>
        <NewLetter/>
        <Footer/>
    </div>
  )
}

export default CategoryPages