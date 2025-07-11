import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Productitem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (

    <div>
        <Link className='' to={`/product/${id}`}>
        <div className=''>
             <img src={image[0]} alt="" />
        </div>
        <p className=''>{name}</p>
        <p className=''>{price}</p>
            </Link>
    </div>
  )
}

export default Productitem