import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestseller, setbestseller] = useState([])
    useEffect(()=>{
          const bestProduct = products.filter((item)=>(item.bestseller))
        setbestseller(bestProduct.slice(0,5))
    },[])

  return (
    <div>
        <div className=' text-center text-3xl' >
           <Title text1={'BEST'} text2={'SELLERS'}/>
           <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores ea mollitia deleniti nobis quidem in eius nemo iure atque nulla eaque praesentium fuga laudantium ipsam sit, beatae ex aperiam!</p>          
        </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
         {
            bestseller.map((item,index )=>(
                   <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />   
            ))
        }
       </div>
    </div>
  )
}

export default BestSeller 