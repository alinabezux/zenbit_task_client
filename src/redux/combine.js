import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";
import {usersReducer} from "./usersReducer";


const reducer = combineReducers({
    itemsReducer,
    usersReducer
});


export {
    reducer
}