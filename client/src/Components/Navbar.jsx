import React from 'react'
import logo from "./Logo.png";
import "./component.css"
const Navbar = () => {
  return (
    <div className='navbar border border-neutral-800 h-14 bg-black'>
        <div className='logo'>
            <span className='flex text-white relative'>
            <img src={logo} alt="" className='h-14 absolute '/>
            <p className='absolute left-12 text-xl top-3'>Romi Finance</p>
            </span>
        </div>
        <div className='lists text-white absolute right-[100px] top-4 justify-between w-[900px]'>
            <ul className='flex justify-around'>
            <li>Home</li>
            <li>Dashboard</li>
            <li>NFT</li>
            <li>Earn</li>
            <li>Buy</li>
            <li>Referals</li>
            <li>Ecosystem</li>
            <li>About</li>
            <li>
              <button className=' bg-green-600 w-20 h-7 rounded-md'>Trade</button>
            </li>
            <li> <button className='border w-[150px] h-[30px]'>Connect Wallet</button></li>
            <li>
              <button>eth</button>
            </li>
         </ul>    
        </div>
    </div>

  )
}

export default Navbar