import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div className='grid grid-cols-4 gap-8'>

   
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/accessories.png" width={80} height={80} alt='accessories' />
        </div>
        <h2 className="text-xl">Accessories</h2>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/beauty.png" width={80} height={80} alt='beauty' />
        </div>
        <h2 className="text-xl">Beauty</h2>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/electronic.png" width={80} height={80} alt='electronic' />
        </div>
        <h2 className="text-xl">Electronic</h2>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/fashion.png" width={80} height={80} alt='fashion' />
        </div>
        <h2 className="text-xl">Fashion</h2>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/food.png" width={80} height={80} alt='food' />
        </div>
        <h2 className="text-xl">Food</h2>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/furniture.png" width={80} height={80} alt='furniture' />
        </div>
        <h2 className="text-xl">Furniture</h2>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/health.png" width={80} height={80} alt='health' />
        </div>
        <h2 className="text-xl">Health</h2>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center p-4 border-2 rounded-full'>
        <Image src="/stationery.png" width={80} height={80} alt='stationery' />
        </div>
        <h2 className="text-xl">Stationery</h2>
    </div>
    
    </div>
  )
}

export default Categories