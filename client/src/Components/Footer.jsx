import React from 'react'
import logo from "./Logo.png";

const Footer = () => {
  return (
    <div>
      <div className='border w-[1500px]'> 
      </div>
      <div className='flex items-center  absolute left-[500px] w-[400px]'>
        <img src={logo} alt="" className='h-[100px]'/>
        <h1 className='absolute right-[120px] text-4xl'>Romi Finance</h1>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>       
           </ul>
      </div>
    </div>
  )
}

export default Footer