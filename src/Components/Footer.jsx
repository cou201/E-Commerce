import { EmailOutlined, LocalPhoneOutlined, LocationOnOutlined } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
  return <div className='flex items-center justify-around p-2'>
      <div className='flex-1 flex flex-col flex-wrap p-2 items-center justify-center '>
        <h1 className='text-[25px] '>
            David Estrada "cou"
        </h1>
        <div className='flex-1 flex flex-col p-2 items-center justify-center'>
            <div className='flex m-3'>
               <LocationOnOutlined/>
               <p className= "pl-3">Cali-valle del cauca</p>
            </div>
            <div className='flex m-3'>
              <LocalPhoneOutlined/>
              <p className= "pl-3">+57 3186832028</p>
            </div>
            <div className='flex m-3'>
              <EmailOutlined/>
              <p className= "pl-3">Davidestradag200@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  
}

export default Footer