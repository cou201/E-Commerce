import React from 'react'
import {Send} from "@material-ui/icons"

const NewLetter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#E1C3B8]'>
        <h1 className= "text-[50px] font-bold">
            New Letter
        </h1>
        <h2 className= "text-[20px] mt-2">
            Always in touch with us, for your favorite products
        </h2>
        <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden'>
            <input
            className='border-none pl-[20px] flex-[7] outline-none'
            type="text"
            placeholder='email'
           
            />
            <button className='bg-[#ffffff] flex-1'>
                <Send/>
            </button>
        </div>
    </div>
  )
}

export default NewLetter