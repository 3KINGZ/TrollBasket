import { combineReducers } from "redux";

import cart from "./cart.reducer";
import history from "./history.reducer";

const rootReducer = combineReducers({ cart, history });

export default rootReducer;
