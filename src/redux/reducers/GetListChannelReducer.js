import * as types from "../actions/GetListChannelAction";

const defaultState = {
    loading: false,
    dataProducts: [],
    error: {}
}
export const getListChannelReducer = (state = defaultState, action) => {
    switch (action.type) {
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
        case types.GET_LIST_CHANNEL_FAILURE:
            return {
                ...state,
                error: action.errors
            }
        default:
            return state;
    }
}