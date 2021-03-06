import * as types from "../actions/types";

const initialState = {
  cart: [],
};

const cartReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_CART: {
      return { cart: [...state.cart, payload] };
    }

    case types.REMOVE_FROM_CART: {
      const cart = state.cart.filter((item: Product) => item.id !== payload);

      return { cart };
    }

    case types.INC_QUANTITY: {
      const cart = state.cart.map((item: Cart) =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item,
      );

      return { cart };
    }

    case types.DEC_QUANTITY: {
      const cart = state.cart.map((item: Cart) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );

      return { cart };
    }

    case types.CHECKOUT: {
      return { cart: [] };
    }

    default:
      return state;
  }
};

export default cartReducer;
