import {call, put, takeEvery} from 'redux-saga/effects';
import {api} from "@/services/api";
import * as actions from "../actions/GetListChannelAction";
import {helpers} from "@/helpers/common";

// redux saga chi viet theo generator function
// redux saga : worker + watcher
// 1 - worker
export function* getAllproductSaga() {
    // generator function
    try {
        // dispatch action start get data
        yield put(actions.startGetDataProducts(true));
        // call data from api
        const data = yield call(api.getAllProducts);
        if (!helpers.isEmptyObject(data)) {
            // co data
            if (data.hasOwnProperty('products')) {
                yield put(actions.getDataProductSuccess(data['products']));
            } else {
                yield put(actions.getDataProductFailure({
                    cod: 404,
                    mess: 'can not found data'
                }))
            }
        } else {
            yield put(actions.getDataProductFailure({
                cod: 500,
                mess: 'can not found data'
            }));
        }
    } catch (error) {
        yield put(actions.getDataProductFailure({
            cod: 500,
            mess: error
        }));
    } finally {
        yield put(actions.stopGetDataProducts(false));
    }
}

// 2 - watcher
export function* watchGetAllProductSaga() {
    yield takeEvery(actions.REQUEST_DATA_PRODUCTS, getAllproductSaga);
}