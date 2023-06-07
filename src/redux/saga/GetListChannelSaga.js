import {call, put, takeEvery} from 'redux-saga/effects';
import {Api} from "@/services/Api";
import * as actions from "../actions/GetListChannelAction";
import {refreshToken} from "@/services/RefreshToken";
import Router from "next/router";

// redux saga chi viet theo generator function
// redux saga : worker + watcher
// 1 - worker
export function* workerGetListChannelSaga() {
    // generator function
    try {
        // dispatch action start get data
        yield put(actions.startGetListChannel(true));
        // call data from api
        let count = 0
        while (count < 2) {
            count++
            const data = yield call(Api.getListChannel);
            if (data.success) {
                // co data
                yield put(actions.getListChannelSuccess(data['data']));
            } else {
                if (!refreshToken()) {
                    Router.replace("/auth/signin");
                }
            }
        }
        yield put(actions.stopGetListChannel(false));
    } catch (error) {
        yield put(actions.getListChannelFailure({
            code: 500,
            message: 'Mất kết nối mạng'
        }));
    }
}

// 2 - watcher
export function* watchGetListChannelSaga() {
    yield takeEvery(actions.REQUEST_GET_LIST_CHANNEL, workerGetListChannelSaga);
}