import React from 'react'
import Navbar from '../Components/Navbar';
import costimg from './costs.svg';
import trade from './trading.svg';
import interest from './interest.svg';
const Home = () => {
  return (
    <div className='bg-black  h-[1000px] text-white'>
      <div>
        <Navbar />
      </div>
      <div className='bg-black '>
        <div className='Sec absolute top-[120px] left-[100px] '>
          <h1 className='text-6xl font-bold'>Decentralized <br />
            Perpetual Exchange</h1> <br />
          <p className='text-xl'>Trade BTC, ETH, AVAX and other top <br /> cryptocurrencies with up to 30x leverage <br /> directly from your wallet</p> <br />
          <button className='border h-[40px] w-[170px] bg-green-600 rounded'>Launch Exchange</button>
          <div className='cards flex justify-around gap-10 absolute top-96  '>
            <div className='card border flex h-[120px] w-[400px] p-8 relative'>
              <img src={trade} alt="" className='h-12' />
              <div>
                <p className='absolute left-28'>Total Trading Volume</p>
                <p className='absolute top-14 left-28 text-3xl'>$0</p>
              </div>
            </div>
            <div className='card border flex h-[120px] w-[400px] p-8 relative'>
              <img src={trade} alt="" className='h-12' />
              <div>
                <p className='absolute left-28'>Total Trading Volume</p>
                <p className='absolute top-14 left-28 text-3xl'>$0</p>
              </div>

            </div>
            <div className='card border flex h-[120px] w-[400px] p-8 relative'>
              <img src={trade} alt="" className='h-12' />
              <div>
                <p className='absolute left-28'>Total Trading Volume</p>
                <p className='absolute top-14 left-28 text-3xl'>$0</p>
              </div>

            </div>
          </div>
        </div>
        <div className='border w-[100%] absolute top-[750px]'></div>
      </div>

    </div>
  )
}

export default Home;