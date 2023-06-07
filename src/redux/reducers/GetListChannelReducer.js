import * as types from "../actions/GetListChannelAction";
import {
    GET_LIST_CHANNEL_SUCCESS,
    GET_LIST_CHANNEL_SUCCESS_FAILURE,
    START_GET_LIST_CHANNEL,
    STOP_GET_LIST_CHANNEL
} from "../actions/GetListChannelAction";

const defaultState = {
    loading: false,
    dataProducts: [],
    error: {}
}
export const productReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.START_GET_LIST_CHANNEL:
            return {
                ...state,
                loading: action.start
            }
        case types.STOP_GET_LIST_CHANNEL:
            return {
                ...state,
                loading: action.stop
            }
        case types.GET_LIST_CHANNEL_SUCCESS:
            return {
                ...state,
                dataProducts: action.products,
                error: {}
            }
        case types.GET_LIST_CHANNEL_SUCCESS_FAILURE:
            return {
                ...state,
                error: action.errors
            }
        default:
            return state;
    }
}