import {
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_USER,
  REMOVE_USER
} from "../constants/action-types";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const addUser = data => {
  return {
    type: ADD_USER,
    payload: data
  };
};

export const removeUser = index => {
  return {
    type: REMOVE_USER,
    index
  };
};
