import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watchProduct from './Saga';
import ProductSlice from './ProductSlice';


const localStore = () => {
    try{
        const storedProductDetails = localStorage.getItem("ProductsForEcommerce");
        if (storedProductDetails === null){
            return undefined;
        }
        return {products : JSON.parse(storedProductDetails)};
    }
    catch(error){
        console.log("sorry no products found");
        return undefined;
    }
};

const savedState = (state) => {
    try{
        const storeList = JSON.stringify(state.products)
        localStorage.setItem("ProductsForEcommerce", storeList)
    }
    catch(error){
        console.log("state is undefined")
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        products: ProductSlice
    },
    preloadedState: localStore(),
    middleware: (getdefaultMiddleware)=> getdefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})
sagaMiddleware.run(watchProduct)

store.subscribe(() => {
  savedState(store.getState());
});


export default store;