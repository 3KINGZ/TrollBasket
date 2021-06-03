import * as types from "./types";

export const addToHistory = (product: Product) => async (dispatch: any) => {
  dispatch({ type: types.ADD_TO_HISTORY, payload: product });
};
