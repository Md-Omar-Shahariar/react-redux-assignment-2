import { DECREMENT, INCREMENT } from "./actionType";

const initialState = {
  product1: { amount: 20, price: 35500 },
  product2: { amount: 35, price: 9300 },
  product3: { amount: 72, price: 36500 },
};

const productReducer = (state = initialState, action) => {
  const id = action.payload;
  switch (id) {
    case 1:
      switch (action.type) {
        case INCREMENT:
          return {
            ...state,
            product1: { ...state.product1, amount: state.product1.amount + 1 },
          };
        case DECREMENT:
          return {
            ...state,
            product1: { ...state.product1, amount: state.product1.amount - 1 },
          };

        default:
          return state;
      }
    case 2:
      switch (action.type) {
        case INCREMENT:
          return {
            ...state,

            product2: { ...state.product2, amount: state.product2.amount + 1 },
          };
        case DECREMENT:
          return {
            ...state,

            product2: { ...state.product2, amount: state.product2.amount - 1 },
          };

        default:
          return state;
      }
    case 3:
      switch (action.type) {
        case INCREMENT:
          return {
            ...state,

            product3: { ...state.product3, amount: state.product3.amount + 1 },
          };
        case DECREMENT:
          return {
            ...state,

            product3: { ...state.product3, amount: state.product3.amount - 1 },
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default productReducer;
