import { ADDITEM, REMOVEITEM } from "../type/todoTypes";

const addItem = value =>{

    return async dispatch =>{
        dispatch({
            type:ADDITEM,
            payload: value,
        })
    }
};

const removeItem =value =>{
    return async dispatch => {
        dispatch({
            type:REMOVEITEM,
            payload:value,
        })
    }
}
export {addItem, removeItem}