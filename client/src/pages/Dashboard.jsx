import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import eth_image from "./etherium.svg";
import zomi_img from './zomi.png';
import zlp_img from './zlp.png';
import Piechart from '../Components/Piechart';
const Dashboard = () => {
    return (
        <div className='bg-black'>
            <div>
                <Navbar />
            </div>
            <div className='p-10'>
                <div className='flex text-3xl font-semibold mt-5 mb-5'>
                    <h1>Stats</h1>
                    <img src={eth_image} alt="" />
                </div>
                <p> Ethereum Total Stats start from 06 Jan 2022.</p>
                <p className='mb-5'>For detailed stats:</p>
                {/* inserting tables  */}
                <div className='flex gap-10'>
                    <table className='border w-[600px] rounded-md relative '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>Overview</td>
                        </tr>
                        <tr className=''>
                            <td className='pt-3'>AUM</td>
                            <td className='absolute right-0 pt-3'>$34</td>
                        </tr>
                        <tr>
                            <td>$ZLP Pool</td>
                            <td className='absolute right-0' >$34</td>
                        </tr>
                        <tr>
                            <td>24h Volume</td>
                            <td className='absolute right-0'>$0</td>
                        </tr>
                        <tr className='	'>
                            <td className=''>Long Positions</td>
                            <td className='absolute right-0 '>...%</td>
                        </tr>
                        <tr>
                            <td className='pb-3'>Short Positions</td>
                            <td className='absolute right-0'>$...</td>
                        </tr>

                    </table>

                    <table className='border w-[600px] rounded-md relative '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>Total Stats</td>
                        </tr>
                        <tr className=''>
                            <td className='pt-3'>Total Fees</td>
                            <td className='absolute right-0 pt-3'>$0</td>
                        </tr>
                        <tr>
                            <td>Total Volume</td>
                            <td className='absolute right-0' >$0</td>
                        </tr>
                        <tr>
                            <td className='pb-10'>Floor Price Fund</td>
                            <td className='absolute right-0 pb-9'>$627,831</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <div className='flex text-3xl font-semibold mt-5 mb-5'>
                        <h1>Tokens</h1>
                        <img src={eth_image} alt="" />
                    </div>
                    <p className='mb-5'>Platform and $ZLP index tokens.</p>
                    <div className='flex gap-10'>
                    <div className='border rounded-md flex p-5'>
                    <table className=' w-[400px] rounded-md relative '>
                        <tr className='border border-t-0 border-r-0 border-l-0'>
                            <div className='flex'>
                            <img src={zomi_img} alt="" className='h-10' />
                            <div>
                            <p>$ZOMI</p>
                            <p className='text-xs	'>$ZOMI</p>
                            </div>
                            </div>
                        </tr>
                        <tr className=''>
                            <td className='pt-3'>Price</td>
                            <td className='absolute right-0 pt-3'>$0.00</td>
                        </tr>
                        <tr>
                            <td>Supply</td>
                            <td className='absolute right-0' >10,000 $ZOMI</td>
                        </tr>
                        <tr>
                            <td className=''>Total Staked</td>
                            <td className='absolute right-0 '>$0</td>
                        </tr>
                        <tr>
                            <td className='pb-10'>Market Cap</td>
                            <td className='absolute right-0 pb-9'>$10</td>
                        </tr>
                    </table>
                    <div className=''>
                    <Piechart  name='Distribution'val1={10} val2={90} tag1='Liquidity' tag2='not stacked'/>
                    </div>
                    </div>
                    <div className='border rounded-md flex p-5'>
                    <table className=' w-[400px] rounded-md relative '>
                        <tr className='border border-t-0 border-r-0 border-l-0'>
                            <div className='flex'>
                            <img src={zlp_img} alt="" className='h-10' />
                            <div>
                            <p>$ZLP</p>
                            <p className='text-xs	'>$ZLP</p>
                            </div>
                            </div>
                        </tr>
                        <tr className=''>
                            <td className='pt-3'>Price</td>
                            <td className='absolute right-0 pt-3'>$1.138</td>
                        </tr>
                        <tr>
                            <td>Supply</td>
                            <td className='absolute right-0' >29 $ZLP</td>
                        </tr>
                        <tr>
                            <td className=''>Total Staked</td>
                            <td className='absolute right-0 '>$34</td>
                        </tr>
                        <tr>
                            <td className=''>Market Cap</td>
                            <td className='absolute right-0 '>$34</td>
                        </tr>
                        <tr>
                            <td className='pb-10'>Stablecoin Percentage</td>
                            <td className='absolute right-0 pb-9'>49.50%</td>
                        </tr>
                    </table>
                    <div className=''>
                    <Piechart  name='$ZLP Pool'val1={49} val2={51} tag1='USDC' tag2='ETH'/>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='mt-10'>
                <table className='border w-[1330px] rounded-md relative '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>$Zomi</td>
                        </tr>
                        <tr className=''>
                            <td>Price</td>
                            <td className='absolute right-0'>$0.00</td>
                        </tr>
                        <tr>
                            <td>Wallet</td>
                            <td className='absolute right-0' >...$ZOMI ($...)</td>
                        </tr>
                        <tr>
                            <td>Staked</td>
                            <td className='absolute right-0'>... $ZOMI ($...)</td>
                        </tr>
                        <br />
                        <tr className='border border-b-0	'>
                            <td className='pt-5'>APR</td>
                            <td className='absolute right-0 pt-5'>...%</td>
                        </tr>
                        <tr>
                            <td>Rewards</td>
                            <td className='absolute right-0'>$...</td>
                        </tr>
                        <tr>
                            <td>Multiplier Points APR</td>
                            <td className='absolute right-0'>100.00%</td>
                        </tr>
                        
                        <tr className=''>
                            <td>Boost Percentage</td>
                            <td className='absolute right-0  pb-5'>...%</td>
                        </tr>
              <br />
                        <tr className='border  border-b-0 mt-5'>
                            <td className='pt-5'>
                            Total Staked
                            </td>
                            <td className='absolute right-0 pt-5'>0 $ZOMI ($...)</td>
                        </tr>
                        <tr>
                            <td>Total Supply</td>
                            <td className='absolute right-0'>10,000 $ZOMI ($10)</td>
                        </tr>
                        <br />
                        <tr>
                            <button className=' m-5 w-[100px] h-[36px] rounded bg-green-800'>Buy $ZOMI</button>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard