// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterSlice';

// export const store = configureStore({
// 	reducer: { counter: counterReducer },
// });
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
	reducer: rootReducer,
});
