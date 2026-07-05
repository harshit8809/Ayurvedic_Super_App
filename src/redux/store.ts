import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/appTheme';
import bookingsReducer from './slice/bookings';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    bookings: bookingsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;