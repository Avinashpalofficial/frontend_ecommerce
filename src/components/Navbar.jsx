 import React from 'react'
 import{ assets}    from '../assets/assets'
 const Navbar = ({setToken}) => {
   return (
     
      <div className='flex items-center justify-between py-2 px-[4%]'>
        <img src={assets.logo} alt="" className='w-[max(10%,80px)]' />
       <button onClick={() => setToken("")} className='bg-gray-500  rounded-full text-white px-5 py-1 sm:px-6 sm:py-2'
       >logout</button>
      </div>
        
     
   )
 }
 
 export default Navbar