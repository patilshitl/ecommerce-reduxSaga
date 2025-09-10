import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watchProduct from './Saga';
import ProductSlice from './ProductSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        counter: ProductSlice
    },
    // lets store know that we are using saga
    middleware: (getdefaultMiddleware)=> getdefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})
sagaMiddleware.run(watchProduct)



export default store;