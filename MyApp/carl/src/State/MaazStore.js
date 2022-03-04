import { createStore, combineReducers } from "redux";
import { navReducers } from "../Reducers/navReducers";
import { ProductReducer } from "../Reducers/ProductReducre";
import { courseReducer } from "../Reducers/courseReducer";
import {CarosalReducer} from "../Reducers/CarosalReducer";
import { cardReducer } from "../Reducers/cardReducer";

export const MaazStore = ()=>{
    const store=createStore(
        combineReducers({navReducers,ProductReducer,courseReducer,CarosalReducer,cardReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}