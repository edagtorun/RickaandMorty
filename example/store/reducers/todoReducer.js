import {ADDITEM, REMOVEITEM} from '../type/todoTypes';

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEM:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
      case REMOVEITEM:
        return{
            ...state,
            todoList:state.todoList.filter(itenm => itenm.id !== action.payload.id)
        }
    default:
      return state;
  }
};

export default todoReducer;
