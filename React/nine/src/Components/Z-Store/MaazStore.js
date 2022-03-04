import { createStore, combineReducers } from "redux";
import { CarouselReducer } from "../Carousel/CarouselReducer";
import { HomeReducer } from "../Home/HomeReducer";
import { DishesReducer } from "../Dishes/DishesReducer";

export const MaazStore = ()=>{
    const store=createStore(combineReducers({CarouselReducer,HomeReducer,DishesReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)
    return store;
}