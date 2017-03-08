import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import userReducer from "./reducers/user_reducer"
import productsReducer from "./reducers/products_reducer"

const reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
})

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducers, middleware)

export { store }