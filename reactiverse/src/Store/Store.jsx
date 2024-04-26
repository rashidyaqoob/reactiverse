import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Redux/Redux.jsx'; 

const store = configureStore({
  reducer: counterReducer, 
});

export default store;