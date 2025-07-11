
import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className=' flex items-center justify-between py-5 font medium'> 
         <Link to={'/'}><img src={assets.logo} className='w-36' alt="" /></Link> 
          <ul className='hidden sm:flex gap-5'>
           <NavLink to='/' className='flex  items-center gap-1'>
             <p>Home</p>
             <hr  className='w-2/4 border-indigo-950' />
           </NavLink>
          
          <NavLink to='/collection' className='flex  items-center gap-1'>
             <p>Collection</p>
             <hr  className='w-2/4 border-indigo-950' />
           </NavLink>
           <NavLink to='/about' className='flex  items-center gap-1'>
             <p>About</p>
             <hr  className='w-2/4 border-indigo-950' />
           </NavLink>
           <NavLink to='/contact' className='flex  items-center gap-1'>
             <p>Contact</p>
             <hr  className='w-2/4 border-indigo-950' />
           </NavLink>
          </ul>
          <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5  cursor-pointer' alt="" />
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 h-5 cursor-pointer' alt="" />
               <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                 <div className='flex flex-col  gap-2 w-32 bg-slate-100 text-gray-400 rounded py-3 px-5'> 
                    <p className='cursor-pointer  hover:text-black'>My profile</p>
                     <p className='cursor-pointer hover:text-black'>Orders</p>
                     <p className='cursor-pointer hover:text-black'>Logout</p>
                 </div>
               </div>
            </div>
            <Link to= '/cart' className= 'relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
           <p className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-red-500 text-white rounded-full px-1'> 5</p>
          </Link>
          </div>
        
    </div>
  )
}

export default Navbar