import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducers'; // Ensure this is correctly exported and set up
const store = configureStore({
  reducer: rootReducer,
 
  // You can also add middleware or devTools configuration here if needed
});

export default store;
