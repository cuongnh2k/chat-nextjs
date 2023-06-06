import {all, call} from 'redux-saga/effects';
import {watchGetAllProductSaga} from "./product";

export default function* rootSaga() {
    yield all([
        call(watchGetAllProductSaga),
    ])
}