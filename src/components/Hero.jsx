import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className=' flex flex-col sm:flex-row border border-gray-500' > 
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
              <div>
                 <div className='flex items-center  gap-2'>
                <p className='w-8 md: w:11 h-[2px] bg-[#414141]'></p>
                <p className=''>OUR BESTSELLERS</p>
                </div> 
                <h1 className=' prata-regular text-3xl lg:text-5xl '>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                   <p className=''>SHOP NOW</p>
                  <p className='w-8 md: w:11 h-[2px] bg-[#534c4c]'></p>
                 
              </div>
              </div>
              
        </div>
        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero 