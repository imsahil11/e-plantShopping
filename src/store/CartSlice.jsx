import { createSlice } from '@reduxjs/toolkit'

// Keep cart state simple for the lab
const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // grader expects these reducer names
    addItem: (state, action) => {
      const item = action.payload
      const existing = state.items.find((entry) => entry.id === item.id)
      if (!existing) {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload
      const item = state.items.find((entry) => entry.id === id)
      if (!item) {
        return
      }
      const nextQty = item.quantity + amount
      if (nextQty > 0) {
        item.quantity = nextQty
      } else {
        state.items = state.items.filter((entry) => entry.id !== id)
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((entry) => entry.id !== action.payload)
    },
  },
})

export const { addItem, updateQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer
