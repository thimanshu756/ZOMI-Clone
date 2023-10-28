import React from 'react'
import Navbar from '../Components/Navbar';
import costimg from './costs.svg';
import trade from './trading.svg';
import interest from './interest.svg';
import liquid_img from './liquid.svg';
import swap_img from './swap.svg';
import zlp_img from './zlp.png';
import zomi_img from './zomi.png';
import user_img from './users.svg';
import Footer from '../Components/Footer';
import './Home.css'
const Home = () => {
  return (
    <div className='bg-black  h-[1850px] text-white overflow-hidden'>
      <div>
        <Navbar/>
      </div>
      <div className='bg-black '>
        <div className='Sec absolute top-[120px] left-[100px] w-[1500px] h-[600px]'>
          {/* Tagline */}
          <h1 className='text-6xl font-bold'>Decentralized <br />
            Perpetual Exchange</h1> <br />
          <p className='text-xl'>Trade BTC, ETH, AVAX and other top <br /> cryptocurrencies with up to 30x leverage <br /> directly from your wallet</p> <br />
          <button className=' h-[40px] w-[170px] bg-green-600 rounded'>Launch Exchange</button>
          <div className='cards flex justify-around gap-10 absolute top-96 left-0 '>
            <div className='card border border-neutral-800			rounded  flex h-[120px] w-[400px] p-8 relative'>
              <img src={trade} alt="" className='h-12' />
              <div>
                <p className='absolute left-28'>Total Trading Volume</p>
                <p className='absolute top-14 left-28 text-3xl'>$0</p>
              </div>
            </div>
            <div className='card border border-neutral-800 flex h-[120px] w-[400px] p-8 relative'>
              <img src={interest} alt="" className='h-12' />
              <div>
                <p className='absolute left-28'>Open Interest</p>
                <p className='absolute top-14 left-28 text-3xl'>$0</p>
              </div>

            </div>
            <div className='card border border-neutral-800 flex h-[120px] w-[400px] p-8 relative'>
              <img src={user_img} alt="" className='h-12' />
              <div>
                <p className='absolute left-28'>Total Users</p>
                <p className='absolute top-14 left-28 text-3xl'>$0</p>
              </div>

            </div>
          </div>
        </div>
        <div className='border w-[100%] absolute border-neutral-800 top-[750px]'></div>
      </div>
        {/* big cards */}
        <div className='flex top-[850px] absolute left-[100px] w-[100%] gap-[200px]'>
          <div className='service-card  '>
          <span className='flex gap-4'>
            <img src={liquid_img} alt="" />
            <h1 className='text-xl'>Reduce Liquidation Risks</h1>
          </span>
          <p className='pt-4'>
          An aggregate of high-quality price <br /> feeds determine when liquidations <br /> occur. This keeps positions safe <br />from temporary wicks.
          </p>
          </div>
          <div className='service-card  '>
          <span className='flex gap-4'>
            <img src={costimg} alt="" />
            <h1 className='text-xl'>Save on Costs</h1>
          </span>
          <p className='pt-4'>
          Enter and exit positions with <br /> minimal spread and zero price <br /> impact. Get the optimal price <br /> without incurring additional costs.
          </p>
          </div>
          <div className='service-card  '>
          <span className='flex gap-4'>
            <img src={swap_img} alt="" />
            <h1 className='text-xl'>Simple Swaps</h1>
          </span>
          <p className='pt-4'>
          Open positions through a simple <br /> swap interface. Conveniently swap <br />from any supported asset into the <br />position of your choice.
          </p>
          </div>
        </div>
        {/* tokens sections */}
        <div className='absolute tokens-sec  top-[1150px] left-[100px]'>
        <h1 className='text-5xl font-bold'>Two tokens create <br /> our ecosystem</h1>
        <div className='flex mt-10 gap-7'>
        <div className='token-cards border border-neutral-800 w-[600px] h-[250px] rounded pl-6 pt-5 relative'>
        <div className='flex gap-3'>
        <img src={zomi_img} alt="" className='h-[40px]' />
        <h1 className='text-xl absolute top-6 left-[70px]'>$ZOMI</h1>
        </div>
        <p className='pt-5 text-xl'>$ZOMI is the utility and governance token. Accrues 30% of the <br />platform's generated fees.</p>
        <br />
        <span className=''>Ethereum APR: 0.00%</span>
        <div className='flex gap-6 pt-4'>
          <button className='w-20 rounded  bg-green-500'>Buy</button>
          <button className='border w-28 h-7 rounded'>Read more</button>
        </div>
        </div>


        <div className='token-cards border border-neutral-800 w-[600px] h-[250px] rounded pl-6 pt-5 relative'>
        <div className='flex gap-3'>
        <img src={zlp_img} alt="" className='h-[40px]' />
        <h1 className='text-xl absolute top-6 left-[70px]'>$ZLP</h1>
        </div>
        <p className='pt-5 text-xl'>$ZLP is the liquidity provider token. Accrues 70% of the <br /> platform's generated fees.</p>
        <br />
        <span className=''>Ethereum APR: 1,655,928,224.10%</span>
        <div className='flex gap-6 pt-4'>
          <button className='w-20 rounded  bg-green-500'>Buy</button>
          <button className='border w-28 h-7 rounded'>Read more</button>
        </div>
        </div>
        </div>
        </div>
        <div className='absolute top-[1600px]'>
         <Footer/>
        </div>
    </div>
  )
}
export default Home;