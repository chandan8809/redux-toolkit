import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeItem ,addItem,subItem} from '../features/cartSlice'
import Image from 'next/image'

const CartItem = ({item}) => {
  const {amount,price}=useSelector(store=>store.cart)
  const dispatch =useDispatch()

  if(amount<1){
    return(
      <>
      <p>your cart is empty</p>
      </>
    )
  }

  return (
    <div className='cartItem'>
      <div>
        <p>price:{item.price}</p>
        <p>desc:{item.title}</p>
        <button onClick={()=>dispatch(removeItem(item.id))}>Remove</button>
      </div>

      <div className='button'>
       <button onClick={()=>dispatch(addItem(item))}>inc</button>
        {item.amount}
        <button onClick={()=>{
          if(item.amount==1){
            dispatch(removeItem(item.id))
            return;
          }
          dispatch(subItem(item))
        }}>dec</button>
      </div>
    </div>
  )
}

export default CartItem