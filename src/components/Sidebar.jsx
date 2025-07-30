import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex w-[15%] min-h-screen bg-white border-r border-gray-300 flex-col items-start justify-start gap-6 p-4'>
       <div className='flex flex-col gap-6 pt-6 pl-[20%] text-[17px]'>
         <NavLink to='/add' className='flex items-center gap-4 border border-gray-300  border-r-0  px-3 py-2 rounded-l'>  
         <img src={assets.add_icon} alt="" className='w-6 h-6' />
         <button className='hidden md:block'>Add items</button>
        </NavLink>
       </div>

       <div className='flex flex-col gap-6 pt-6 pl-[20%] text-[17px]'>
         <NavLink to='/list' className='flex items-center gap-4 border border-gray-300  border-r-0  px-3 py-2 rounded-l'>  
         <img src={assets.order_icon} alt="" className='w-6 h-6' />
         <button className='hidden md:block'>List items</button>
        </NavLink>
       </div>
       
        <div className='flex flex-col gap-6 pt-6 pl-[20%] text-[17px]'>
         <NavLink to='/orders' className='flex items-center gap-4 border border-gray-300  border-r-0  px-3 py-2 rounded-l'>  
         <img src={assets.order_icon} alt="" className='w-6 h-6' />
         <button className='hidden md:block'>Orders</button>
        </NavLink>
       </div>
    </div>
  )
}

export default Sidebar