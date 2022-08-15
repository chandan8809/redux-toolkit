import React from 'react'
import Navbar from './Navbar'
import CartItem from './cartItem'
import { useSelector } from 'react-redux'
import { calcTotal, clearAll ,getCartItems} from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const CartContainer = () => {
    const {cartItems,amount,total,isLoading}= useSelector(store=>store.cart)
    const dispatch=useDispatch()

    React.useEffect(()=>{
      dispatch(calcTotal())
    },[cartItems])

    React.useEffect(()=>{
      dispatch(getCartItems())
    },[])
    
  if(isLoading){
    return <h1>...loading</h1>
  }  
  
  return (
    <div className='cartContainer'>
        <Navbar/>
        <div className='items'>
           {cartItems.map(each=><CartItem key={each.id} item={each}/>)}
        </div>
        <div>
          <hr />
        </div>
        <div className='footer'>
           <h1>total:{Math.round(total*100)/100}</h1>
           <button onClick={()=>dispatch(clearAll())}>remove all</button>
        </div>
    </div>
    
  )
}

export default CartContainer