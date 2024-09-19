import Image from 'next/image'
import React from 'react'

function NewFeed() {
  return (
    <div className='mt-10 h-svh'>
        <div className='text-center'>
          <h2 className='font-bold text-2xl'>New Arrivals</h2>
        </div>
        <div className='flex justify-around mt-10'>
            <div className='relative rounded-lg w-[250px] text-center bg-white shadow-md shadow-gray-950/20'>
                 <img className='w-full rounded-t-md h-[150px] object-cover' src={'https://plus.unsplash.com/premium_photo-1679860703742-fefbd20244fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                 <h4 className='mt-2'>Circular Saw</h4>
                 <p className='text-red-600 text-xs mt-2'><span className='font-bold mr-1'>MVR</span><span className='font-semibold'>2,000</span></p>
                 <div className='flex flex-col'>
                    <button className='text-xs py-2 px-3 mt-2  bg-blue-600 text-white rounded-b-md'>Add to cart</button>
                 </div>
            </div>
            <div className='relative rounded-lg w-[250px] text-center bg-white shadow-md shadow-gray-950/20'>
                 <img className='w-full rounded-t-md h-[150px] object-cover' src={'https://plus.unsplash.com/premium_photo-1679860703742-fefbd20244fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                 <h4 className='mt-2'>Circular Saw</h4>
                 <p className='text-red-600 text-xs mt-2'><span className='font-bold mr-1'>MVR</span><span className='font-semibold'>2,000</span></p>
                 <div className='flex flex-col'>
                    <button className='text-xs py-2 px-3 mt-2  bg-blue-600 text-white rounded-b-md'>Add to cart</button>
                 </div>
            </div>
            <div className='relative rounded-lg w-[250px] text-center bg-white shadow-md shadow-gray-950/20'>
                 <img className='w-full rounded-t-md h-[150px] object-cover' src={'https://plus.unsplash.com/premium_photo-1679860703742-fefbd20244fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                 <h4 className='mt-2'>Circular Saw</h4>
                 <p className='text-red-600 text-xs mt-2'><span className='font-bold mr-1'>MVR</span><span className='font-semibold'>2,000</span></p>
                 <div className='flex flex-col'>
                    <button className='text-xs py-2 px-3 mt-2  bg-blue-600 text-white rounded-b-md'>Add to cart</button>
                 </div>
            </div>
          
            <div className='relative rounded-lg w-[250px] text-center bg-white shadow-md shadow-gray-950/20'>
                 <img className='w-full rounded-t-md h-[150px] object-cover' src={'https://plus.unsplash.com/premium_photo-1679860703742-fefbd20244fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                 <h4 className='mt-2'>Circular Saw</h4>
                 <p className='text-red-600 text-xs mt-2'><span className='font-bold mr-1'>MVR</span><span className='font-semibold'>2,000</span></p>
                 <div className='flex flex-col'>
                    <button className='text-xs py-2 px-3 mt-2  bg-blue-600 text-white rounded-b-md'>Add to cart</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default NewFeed