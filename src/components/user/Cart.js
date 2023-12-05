import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <Link to={'/checkout'} className='btn btn-sm btn-primary me-2'>Add to Cart</Link>
    </div>
  )
}

export default Cart