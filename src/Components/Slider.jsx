/* eslint-disable array-callback-return */
import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined  } from "@material-ui/icons";
import {ApiSlides} from "../ApiFolder/SliderApi"
import {useState} from "react"
import "./Slider.css"

function Slider() {

  const[slides] = useState(ApiSlides)
  const [activeSlide, SetActiveSlide] = useState(0) 

  const arrowStyle = "leftarrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer"

  const nextSlide = () => {
    if(activeSlide === slides.length - 1){
      SetActiveSlide(0)
    }else {
      SetActiveSlide(activeSlide + 1)
    }
  }
  const prevSlide = () => {
    if(activeSlide === 0){
      SetActiveSlide(slides.length -1)
    }else {
      SetActiveSlide(activeSlide - 1)
    }
  }
  return (
    <div className='ParantDiv h-[540px] bg-white flex items-center justify-between'>
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{fontSize: "50px"}} onClick={prevSlide}/>
      </div>
       {slides.map((slide, index) => {
          if(index === activeSlide){
            return (
                <div className={`slider wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg
      border-[#e90000] border-10px overflow-hidden relative` + slide.background}>

          <div className='slide flex items-center justify-center h-[100%]'>
      <div className='forImage flex flex-1 items-center justify-center h-[100%]' >
        <img 
        className= "h-[100%] object-cover"
        src={slide.src} alt='slide_image'/>
      </div> 
      <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11 ">
           <h2 className="text-[55px]">Hey! this is a article of the moment</h2>
           <p className="text-[30px]">Upto 40% off</p>
           <button className='btn'>Shop now</button>
      </div>
      </div>
      </div>
            )
          }
       })}
    
      <div className={arrowStyle}>
      <ArrowRightOutlined  style={{fontSize: "50px"}} onClick = {nextSlide}/>
      </div>
    </div>
  )
}

export default Slider