import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {amount}=useSelector(store=>store.cart)
  return (
    <div className='navContainer'>
        <nav className='navBox'>
            <h1>Heading</h1>
            <h1>amount:{amount}</h1>
        </nav>
    </div>
  )
}

export default Navbar