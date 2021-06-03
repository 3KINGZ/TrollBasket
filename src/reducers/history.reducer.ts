import * as types from "../actions/types";

const initialState = {
  history: [],
};

const historyReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_HISTORY: {
      return { history: [...state.history, payload] };
    }

    default:
      return state;
  }
};

export default historyReducer;
