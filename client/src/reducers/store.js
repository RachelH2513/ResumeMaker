// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer'

// const composedEnhancer = composeWithDevTools(
//     applyMiddleware()
// )
// const store = createStore(rootReducer, composedEnhancer)

// export default store

// Use RTK(Redux toolkit) to set up Store
import { configureStore } from '@reduxjs/toolkit'
import basicinfoSlice from "./features/basicinfo/basicinfoSlice";

const store = configureStore({
    reducer:{
        basicinfo: basicinfoSlice
    }
})

export default store
