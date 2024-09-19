import React from 'react'

function Footer() {
  return (
    <div className='bg-[#f0f1f3]  p-4'>
        <div className='flex gap-5'>
            <div>
                <h3>SITHAANA HARDWARE PVT. LTD</h3>
                <h3>HO:</h3>
                <h3>T:</h3>
                <h3>E: info@sitaana.com.mv</h3>
            </div>
            <div className='text-sm'>
                <h4>about us</h4>
                <h4>Contact us</h4>
                <h4>Store Location</h4>
            </div>
            <div className='text-sm'>
                <h4>Jobs</h4>
                <h4>Terms & Conditions</h4>
            </div>  
        </div>
       
            <div className='text-center'>
                <p className='text-xs'>© 2024 Sithaana Hardware</p>
            </div>
    </div>
  )
}

export default Footer