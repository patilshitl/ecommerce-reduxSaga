import Api from './Api';
import {call, put, takeEvery} from 'redux-saga/effects'
import { fetchProductRequest,fetchProductSucess, fetchProductFailure } from './ProductSlice';

function* fetchProducts() {
    try {
        const response = yield call(Api.get, "/products");
        yield put(fetchProductSucess(response.data)); 
    }
    catch (error){
        yield put(fetchProductFailure(error.message))
    }
}

function* watchProduct() {
    yield takeEvery(fetchProductRequest.type, fetchProducts);
}