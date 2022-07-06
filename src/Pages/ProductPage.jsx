import React from 'react'
import Announce from '../Components/Announce'
import Counter from '../Components/Counter'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import NewLetter from '../Components/NewLetter'

const ProductPage = () => {
  return (
    <div>
        <Announce/>
        <NavBar/>
        <div className='flex justify-center'>
          <div className='flex flex-1 items-center justify-center'>
              <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
              alt='product_image'
              className="w-[80%] g-[80%] rounded-lg shadow-lg hover:scale[1.1] ease-in duration-300"/>
          </div>
          <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-10'>
            <h1 className="title text-[40px]">Hoody to the moment</h1>
            <p className="pr-[4rem] text-justify mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet sequi ex soluta et quis nihil nostrum deleniti perferendis amet, 
            ea debitis eligendi quibusdam aliquid reprehenderit rem sunt placeat molestiae? Officia.</p>
            <p className="mt-7 text-3xl">Price: <b>$100</b></p>
            <div className='flex text-2xl mt-7'>
                Colors
                <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
                <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
                <div className="bg-yellow-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            </div>
            <div className='mt-7 text-2xl'>
                size
                <select className="ml-5 border-2">
                    <option selectd disabled>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
            <div className="mt-5">
                <Counter/>
            </div>
            <button className="btn mt-5">Add to Cart</button>
          </div>
        </div>
        <NewLetter/>
        <Footer/>
    </div>
  )
}

export default ProductPage