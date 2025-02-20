import {configureStore} from "@reduxjs/toolkit"
import todoReducer from '../features/toDoSlice'
//store
export const store = configureStore({
    reducer: {todoReducer}
});
