import {GET_ITEMS} from "./actions";

const itemsReducer = (state = {items: []}, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ITEMS:
            console.log(payload);
            return {...state, items: payload}
        default:
            return {...state}
    }
}

export {itemsReducer}