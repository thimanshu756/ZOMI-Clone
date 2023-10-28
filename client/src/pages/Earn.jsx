import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Earn = () => {
  return (
    <div className='bg-black '>
        <div>
        <Navbar/>
        </div>
        <div className='relative left-[100px]'>
            <div className='mt-[50px] mb-[30px] '>
                <h1 className='text-4xl font-semibold'>Earn</h1> 
                <p className='mt-[10px] '>Stake $ZOMI and $ZLP to earn rewards.</p>
            </div>
            <div>
                <div className='flex gap-10'>
                    <table className='border w-[600px] rounded-md relative '>
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
                    <table className='border w-[600px] rounded-md relative '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>Total Rewards</td>
                        </tr>
                        <tr className=''>
                            <td>ETH (WETH)</td>
                            <td className='absolute right-0'>... ($...)</td>
                        </tr>
                        <tr>
                            <td>$ZOMI</td>
                            <td className='absolute right-0' >... ($...)</td>
                        </tr>
                        <tr>
                            <td>Escrowed $ZOMI</td>
                            <td className='absolute right-0'>... ($...)</td>
                        </tr>
                        <tr className='	'>
                            <td className=''>Multiplier Points</td>
                            <td className='absolute right-0 '>...</td>
                        </tr>
                        <tr>
                            <td>Staked Multiplier Points</td>
                            <td className='absolute right-0'>...</td>
                        </tr>
                        <tr className=''>
                            <td>Total</td>
                            <td className='absolute right-0 '>$...</td>
                        </tr>
                        <div className='border relative mt-16 top-[50px]'></div>
                        <tr>
                            <button className=' relative top-7 m-5 w-[150px] h-[36px] rounded bg-green-800'>Connect Wallet</button>
                        </tr>
                    </table>
                </div>
                <div className='flex gap-10'>
                <table className='border w-[600px] rounded-md relative mt-10 '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>$ZLP (Ethereum)</td>
                        </tr>
                        <tr className=''>
                            <td>Price</td>
                            <td className='absolute right-0'>$...</td>
                        </tr>
                        <tr>
                            <td>Wallet</td>
                            <td className='absolute right-0' >...$ZLP ($...)</td>
                        </tr>
                        <tr>
                            <td>Staked</td>
                            <td className='absolute right-0'>... $ZLP ($...)</td>
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
                        <br />
                        <tr className='border  border-b-0 mt-5'>
                            <td className='pt-5'>
                            Total Staked
                            </td>
                            <td className='absolute right-0 pt-5'>0 $ZLP ($...)</td>
                        </tr>
                        <tr className='border border-t-0'>
                            <td className='pb-6'>Total Supply</td>
                            <td className='absolute right-0'>10,000 $ZLP ($...)</td>
                        </tr>
                        <br />
                        <tr className=''>
                        <button className=' m-5 w-[100px] h-[36px] rounded bg-green-800'>Buy $ZOMI</button>
                        <button className=' m-5 w-[100px] h-[36px] rounded bg-green-800'>Buy $ZOMI</button>
                        </tr>
                </table>
                <table className='border w-[600px] rounded-md relative mt-10 '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>$ZLP (Ethereum)</td>
                        </tr>
                        <tr className=''>
                            <td>Price</td>
                            <td className='absolute right-0'>$...</td>
                        </tr>
                        <tr>
                            <td>Wallet</td>
                            <td className='absolute right-0' >...$ZLP ($...)</td>
                        </tr>
                        <tr>
                            <td>Staked</td>
                            <td className='absolute right-0'>... $ZLP ($...)</td>
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
                        <br />
                        <tr className='border  border-b-0 mt-5'>
                            <td className='pt-5'>
                            Total Staked
                            </td>
                            <td className='absolute right-0 pt-5'>0 $ZLP ($...)</td>
                        </tr>
                        <tr className='border border-t-0'>
                            <td className='pb-6'>Total Supply</td>
                            <td className='absolute right-0'>10,000 $ZLP ($...)</td>
                        </tr>
                        <br />
                        <tr className=''>
                        <button className=' m-5 w-[100px] h-[36px] rounded bg-green-800'>Buy $ZOMI</button>
                        <button className=' m-5 w-[100px] h-[36px] rounded bg-green-800'>Buy $ZOMI</button>
                        </tr>
                </table>
                </div>
                <div className='mt-[50px] mb-[30px] '>
                <h1 className='text-4xl font-semibold'>Vest</h1> 
                <p className='mt-[10px] '>Convert esZOMI tokens to $ZOMI tokens. <br /> Please read the vesting details before using the vaults.</p> <br />
                <div className='flex gap-10'>
                    <table className='border w-[600px] rounded-md relative '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>$ZOMI Vault</td>
                        </tr>
                        <tr className=''>
                            <td className='pt-4'>Staked Tokens</td>
                            <td className='absolute right-0'>...</td>
                        </tr>
                        <tr>
                            <td>Reserved for Vesting</td>
                            <td className='absolute right-0' >0.00 / ...</td>
                        </tr>
                        <tr>
                            <td>Vesting Status</td>
                            <td className='absolute right-0'>0.0000 / 0.0000</td>
                        </tr>
                  
                        <tr className='border border-t-0 '>
                            <td className='pb-3'>Claimable</td>
                            <td className='absolute right-0 pb-5 '>0.0000 $ZOMI</td>
                        </tr>
                        <tr>
                        <button className=' m-5 w-[150px] h-[36px] rounded bg-green-800'>Connect Wallet</button>                        </tr>
                    </table>
                    <table className='border w-[600px] rounded-md relative '>
                        <tr className='border'>
                            <td className=' left-0 p-2 text-l'>$ZLP Vault</td>
                        </tr>
                        <tr className=''>
                            <td className='pt-4'>Staked Tokens</td>
                            <td className='absolute right-0'>...</td>
                        </tr>
                        <tr>
                            <td>Reserved for Vesting</td>
                            <td className='absolute right-0' >0.00 / ...</td>
                        </tr>
                        <tr>
                            <td>Vesting Status</td>
                            <td className='absolute right-0'>0.0000 / 0.0000</td>
                        </tr>
                  
                        <tr className='border border-t-0 '>
                            <td className='pb-4'>Claimable</td>
                            <td className='absolute right-0 pb-5 '>0.0000 $ZOMI</td>
                        </tr>
                        <tr>
                        <button className=' m-5 w-[150px] h-[36px] rounded bg-green-800'>Connect Wallet</button>                        </tr>
                    </table>
                </div>
            </div>

            </div>
        </div>
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Earn