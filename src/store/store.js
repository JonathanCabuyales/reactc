import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";


// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// const middleware = [thunk];
// const middlewareEnhancer = applyMiddleware(...middleware);

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});


export default store;