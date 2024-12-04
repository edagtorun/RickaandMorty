import {DECREMENT, INCREMENT, RESET} from '../type/countType';

const incrementCount = () => {
  return async dispatch => {
    dispatch({type: INCREMENT});
  };
};

export {incrementCount};

const decrementCount = () => {
  return async dispatch => {
    dispatch({type: DECREMENT});
  };
};

export {decrementCount};

const resetCount = value => {
  return async dispatch => {
    dispatch({type: RESET, payload: value});
  };
};
export {resetCount};
