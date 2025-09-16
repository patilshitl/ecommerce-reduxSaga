import Api from './Api';
import {call, put, takeEvery} from 'redux-saga/effects'
import { fetchProductRequest,
    fetchProductSucess, 
    fetchProductFailure } 
    from './ProductSlice';

function* fetchProducts() {
    try {
        const response = yield call(Api.get, "/products");
        // console.log("API Response:", response.data);
        
        // const productDetails = response.data;
        // console.log("title:", productDetails.title);

        yield put(fetchProductSucess(response.data)); 
    }
    catch (error){
        yield put(fetchProductFailure(error.message))
        // console.log(error.message);
    }
}

export default function* watchProduct() {
    yield takeEvery(fetchProductRequest.type, fetchProducts);
}


