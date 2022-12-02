import { configureStore } from '@reduxjs/toolkit'
import grocery from './groceriesSlice'
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    grocery, 
    cart
  },
})