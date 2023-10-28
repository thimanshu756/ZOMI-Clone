import React from 'react'
import logo from "./Logo.png";
import "./component.css";
import { Link , Outlet} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar border border-neutral-800 h-14 bg-black'>
        <div className='logo'>
            <span className='flex text-white relative'>
            <img src={logo} alt="" className='h-14  '/>
            <p className='absolute left-12 text-xl top-3'>Romi Finance</p>
            </span>
        </div>
        <div className='lists text-white absolute right-[100px] top-4 justify-between w-[900px]'>
            <ul className='flex justify-around'>
            <li className='links'><Link to="/">Home</Link>  </li>
            <li className='links'><Link to="dashboard">Dashboard</Link>  </li>
            <li className='links '>  NFT</li>
            <li className='links'> <Link to="earn">Earn</Link>  </li>
            <li className='links'>  Buy</li>
            <li className='links'>  Referals</li>
            <li className='links'>  Ecosystem</li>
            <li className='links'>  About</li>
            <Outlet />
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