import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number; // To track the quantity
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProductIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingProductIndex !== -1) {
        // If product already exists, increment the quantity
        state.items[existingProductIndex].quantity += 1;
      } else {
        // If product doesn't exist, add it with quantity 1
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProductIndex = state.items.findIndex(
        item => item.id === action.payload,
      );

      if (
        existingProductIndex !== -1 &&
        state.items[existingProductIndex].quantity > 1
      ) {
        // Decrease quantity if more than 1
        state.items[existingProductIndex].quantity -= 1;
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProductIndex = state.items.findIndex(
        item => item.id === action.payload,
      );

      if (existingProductIndex !== -1) {
        // Increase quantity
        state.items[existingProductIndex].quantity += 1;
      }
    },
  },
});

export const {addToCart, removeFromCart, decreaseQuantity, increaseQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
