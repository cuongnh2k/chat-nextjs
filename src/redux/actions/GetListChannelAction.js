export const REQUEST_GET_LIST_CHANNEL = 'REQUEST_GET_LIST_CHANNEL';
export const requestDataProducts = () => ({
    type: REQUEST_GET_LIST_CHANNEL
})
// ben tren la nhung action se dc dispatch vao trong middleware redux saga (ko di thang vao trong store)

// cac action cua middleware saga se xu ly khi nhan action khac dispatch vao

export const START_GET_LIST_CHANNEL = 'START_GET_LIST_CHANNEL';
export const startGetDataProducts = (start) => ({
    type: START_GET_LIST_CHANNEL,
    start
});

export const STOP_GET_LIST_CHANNEL = 'STOP_GET_LIST_CHANNEL';
export const stopGetDataProducts = (stop) => ({
    type: STOP_GET_LIST_CHANNEL,
    stop
});

export const GET_LIST_CHANNEL_SUCCESS = 'GET_LIST_CHANNEL_SUCCESS';
export const getDataProductSuccess = (products) => ({
    type: GET_LIST_CHANNEL_SUCCESS,
    products
});

export const GET_LIST_CHANNEL_SUCCESS_FAILURE = 'GET_LIST_CHANNEL_SUCCESS_FAILURE';
export const getDataProductFailure = (errors) => ({
    type: GET_LIST_CHANNEL_SUCCESS_FAILURE,
    errors
});



