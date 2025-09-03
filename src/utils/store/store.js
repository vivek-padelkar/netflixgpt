import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/moviesSlice";
const store = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer
        }
    }
)

export default store