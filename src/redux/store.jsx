import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './someSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
        // user: userReducer,
    }
})