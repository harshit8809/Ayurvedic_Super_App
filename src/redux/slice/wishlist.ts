import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import { storage } from '../../storage/storageLocal';

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const WISHLIST_STORAGE_KEY = 'wishlist_items';

const saveWishlistToStorage = (items: Product[]) => {
  try {
    storage.set(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.log('Error saving wishlist:', error);
  }
};

export const loadWishlistFromStorage = (): Product[] => {
  try {
    const wishlistData = storage.getString(WISHLIST_STORAGE_KEY);
    return wishlistData ? JSON.parse(wishlistData) : [];
  } catch (error) {
    console.log('Error loading wishlist:', error);
    return [];
  }
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    initializeWishlist: (state) => {
      state.items = loadWishlistFromStorage();
    },
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        saveWishlistToStorage(state.items);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveWishlistToStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      try {
        storage.remove(WISHLIST_STORAGE_KEY);
      } catch (error) {
        console.log('Error clearing wishlist:', error);
      }
    },
  },
});

export const {
  initializeWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
