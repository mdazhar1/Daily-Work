import { createStore, combineReducers } from "redux";
// import { sampleReducer } from "./State/Reducers/sampleReducer";
import {bodyReducer} from "./State/Reducers/bodyReducer";
import { NavReducer } from "./State/Reducers/NavReducer";
import { mentorReducer } from "./State/Reducers/mentorReducer";


export const configStore=()=>{
    const store= createStore(combineReducers({bodyReducer,NavReducer,mentorReducer}),
            window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};