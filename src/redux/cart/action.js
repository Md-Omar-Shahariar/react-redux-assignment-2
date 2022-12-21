import { DECREMENT, INCREMENT } from "./actionType";

export const cartIncrement = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
export const cartDecrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
