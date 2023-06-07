import {call, put, takeEvery} from 'redux-saga/effects';
import {Api} from "@/services/Api";
import * as actions from "../actions/GetListChannelAction";
import {helpers} from "@/helpers/common";

// redux saga chi viet theo generator function
// redux saga : worker + watcher
// 1 - worker
export function* workerGetListChannelSaga() {
    // generator function
    try {
        // dispatch action start get data
        yield put(actions.startGetListChannel(true));
        // call data from api
        const data = yield call(Api.getAllProducts);
        if (!helpers.isEmptyObject(data)) {
            // co data
            if (data.hasOwnProperty('products')) {
                yield put(actions.getListChannelSuccess(data['products']));
            } else {
                yield put(actions.getListChannelFailure({
                    cod: 404,
                    mess: 'can not found data'
                }))
            }
        } else {
            yield put(actions.getListChannelFailure({
                cod: 500,
                mess: 'can not found data'
            }));
        }
    } catch (error) {
        yield put(actions.getListChannelFailure({
            cod: 500,
            mess: error
        }));
    } finally {
        yield put(actions.stopGetListChannel(false));
    }
}

// 2 - watcher
export function* watchGetListChannelSaga() {
    yield takeEvery(actions.REQUEST_GET_LIST_CHANNEL, workerGetListChannelSaga);
}