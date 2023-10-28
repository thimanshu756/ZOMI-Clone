import React from 'react'
import logo from "./Logo.png";
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineMedium } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import "./component.css";

const Footer = () => {
  return (
    <div className=' relative z-10 h-[250px] bg-black'>
      <div className='border border-neutral-800 w-[1500px] h-[0px]'> 
      </div>
      <div className='flex items-center  absolute left-[500px] w-[400px] top-[30px]'>
        <img src={logo} alt="" className='h-[100px]'/>
        <h1 className='absolute right-[120px] text-4xl'>Romi Finance</h1>
      </div>
      <div>
      <ul className='flex justify-between gap-20   absolute top-[130px]  left-[450px] text-4xl items-center'>
          <li className='links'><BsTwitter/></li>
          <li className='links'><AiOutlineMedium/></li>
          <li className='links'><AiFillGithub/></li>
          <li className='links'><BsTelegram/></li>
          <li className='links'><BsDiscord/></li>       
           </ul>
      </div>
      <div className='flex gap-10 relative left-[500px] top-[190px]'>
        <p>Terms and Conditions</p>
        <p>Referral Terms</p>
        <p>Media Kit</p>
      </div>
    </div>
  )
}
export default Footer