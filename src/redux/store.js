import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//pass all values in the middlewares array
//more scalable
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
