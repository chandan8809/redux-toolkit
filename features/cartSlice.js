import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


const url="https://course-api.com/react-useReducer-cart-project"

const initialState = {
  cartItems:[],
  amount:0,
  total:0,
  isLoading:true
}

export const getCartItems = createAsyncThunk("cart/getCartItems",async()=>{
  try{
    let resp=await fetch(url)
    const data=resp.json()
    return data

  }catch(err){
    console.log(err)
  }
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
     clearAll:(state)=>{
      state.cartItems=[]
     },
     removeItem:(state,action)=>{
      const itemId=action.payload
      state.cartItems=state.cartItems.filter((item)=>item.id!==itemId)
     },
     
     addItem:(state,{payload})=>{
      const cartItem=state.cartItems.find((item)=>item.id===payload.id)
      cartItem.amount+=1
     },
    
     subItem:(state,{payload})=>{
      const cartItem=state.cartItems.find((item)=>item.id===payload.id)
      cartItem.amount-=1
     },
     
     calcTotal:(state)=>{
      let amount=0;
      let total=0;
      state.cartItems.forEach((each)=>{
        amount+=each.amount;
        total+=each.amount*each.price
      })
      state.amount=amount;
      state.total=total;
     }
  },
  extraReducers:{
    [getCartItems.pending]:(state)=>{
      state.isLoading=true;
    },
    [getCartItems.fulfilled]:(state,action)=>{
      state.isLoading=false;
      state.cartItems=action.payload
    },
    [getCartItems.rejected]:(state)=>{
      state.isLoading=false;
    },
  }
})

// Action creators are generated for each case reducer function
export const {clearAll,removeItem,addItem,subItem,calcTotal} =cartSlice.actions

export default cartSlice.reducer