import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { outlayApi } from '../services/outlay';

export const store = configureStore({
  reducer: {
    [outlayApi.reducerPath]: outlayApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(outlayApi.middleware),
});

setupListeners(store.dispatch);
