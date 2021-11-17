import { configureStore } from '@reduxjs/toolkit';

import productReducer from './slices/productSlide';

export default configureStore({
  reducer: {
    product: productReducer,
  },
});

// export type RootState = ReturnType<typeof rootReducer>;
