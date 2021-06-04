import * as types from "./types";

export const addToCart = (product: Cart) => async (dispatch: any) => {
  dispatch({ type: types.ADD_TO_CART, payload: product });
};

export const removeFromCart = (id: string) => async (dispatch: any) => {
  dispatch({ type: types.REMOVE_FROM_CART, payload: id });
};

export const incQty = (id: string) => async (dispatch: any) => {
  dispatch({ type: types.INC_QUANTITY, payload: id });
};

export const decQty = (id: string) => async (dispatch: any) => {
  dispatch({ type: types.DEC_QUANTITY, payload: id });
};

export const checkout = () => async (dispatch: any) => {
  dispatch({ type: types.CHECKOUT });
};
