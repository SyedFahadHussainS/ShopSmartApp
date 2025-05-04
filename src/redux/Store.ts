import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Slices/CartSlices';
import wishlistReducer from './Slices/WishListSlices';
import profileReducer from './Slices/ProfileSlices';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
