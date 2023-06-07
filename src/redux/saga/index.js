import {all, call} from 'redux-saga/effects';
import {watchGetAllProductSaga} from "./GetListChannelSaga";

export default function* rootSaga() {
    yield all([
        call(watchGetAllProductSaga),
    ])
}