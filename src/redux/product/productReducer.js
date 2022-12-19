import { INCREMENT } from "./actionType";

const initialState = {
  product1: { amount: 20 },
  product2: { amount: 35 },
  product3: { amount: 72 },
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
            product2: { ...state.product2 },
            product3: { ...state.product3 },
          };

        default:
          return state;
      }
    case 2:
      switch (action.type) {
        case INCREMENT:
          return {
            ...state,
            product1: { ...state.product1 },
            product2: { ...state.product2, amount: state.product2.amount + 1 },
            product3: { ...state.product3 },
          };

        default:
          return state;
      }
    case 3:
      switch (action.type) {
        case INCREMENT:
          return {
            ...state,
            product1: { ...state.product1 },
            product2: { ...state.product2 },
            product3: { ...state.product3, amount: state.product3.amount + 1 },
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default productReducer;
