import * as types from "../actions/GetListChannelAction";

const defaultState = {
    loading: false,
    dataProducts: [],
    error: {}
}
export const productReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.START_GET_DATA:
            return {
                ...state,
                loading: action.start
            }
        case types.STOP_GET_DATA:
            return {
                ...state,
                loading: action.stop
            }
        case types.GET_DATA_PRODUCTS_SUCCESS:
            return {
                ...state,
                dataProducts: action.products,
                error: {}
            }
        case types.GET_DATA_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.errors
            }
        default:
            return state;
    }
}