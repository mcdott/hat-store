import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { NewItem } from '../../interfaces/NewItem'
import { InitialState } from '../../interfaces/InitialState'
import { CartItems } from '../../interfaces/CartItems'

const initialState:InitialState = {
  cartItems: [],
  totalAmount:0,
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
    addItems(state, action: PayloadAction<NewItem>) {
      const newItem:NewItem = action.payload
      const existingItem = state.cartItems.find((item: { id: number })=> item.id === newItem.id);

      state.totalQuantity++;

      if(!existingItem){
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.cost,
        })
        state.totalAmount += newItem.cost
      }
      else{
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
        state.totalAmount += existingItem.price

      }

      // return state;
    }
      // addItem:(state, action: PayloadAction<NewItem>)=>{
      //     const newItem:NewItem = action.payload
      //     const existingItem = state.cartItems.find((item: { id: number })=> item.id === newItem.id);

      //     state.totalQuantity++

      //     if(!existingItem){
      //         state.cartItems.push({
      //             id: newItem.id,
      //             name: newItem.name,
      //             image: newItem.image,
      //             price: newItem.price,
      //             quantity: 1,
      //             totalPrice: newItem.cost
      //         })
      //     }
      //     else{
      //        existingItem.quantity++
      //         existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
      //     }
      //    console.log(state.totalQuantity);
      //    console.log(state.cartItems);
      //    console.log(newItem);
      //    console.log(state)

      //    return state;
      // },
  },
});

export const { addItems} = cartSlice.actions

export default cartSlice.reducer