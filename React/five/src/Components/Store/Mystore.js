import { createStore, combineReducers } from "redux";
import { carouselReducer } from "../Crousel/carouselReducer";

export const Mystore=()=>{
    const store=createStore(combineReducers({carouselReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
    }