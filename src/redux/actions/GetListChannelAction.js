export const REQUEST_GET_LIST_CHANNEL = 'REQUEST_GET_LIST_CHANNEL';
export const requestGetListChannel = () => ({
    type: REQUEST_GET_LIST_CHANNEL
})
// ben tren la nhung action se dc dispatch vao trong middleware redux saga (ko di thang vao trong store)

// cac action cua middleware saga se xu ly khi nhan action khac dispatch vao

export const START_GET_LIST_CHANNEL = 'START_GET_LIST_CHANNEL';
export const startGetListChannel = (start) => ({
    type: START_GET_LIST_CHANNEL,
    start
});

export const STOP_GET_LIST_CHANNEL = 'STOP_GET_LIST_CHANNEL';
export const stopGetListChannel = (stop) => ({
    type: STOP_GET_LIST_CHANNEL,
    stop
});

export const GET_LIST_CHANNEL_SUCCESS = 'GET_LIST_CHANNEL_SUCCESS';
export const getListChannelSuccess = (data) => ({
    type: GET_LIST_CHANNEL_SUCCESS,
    data
});

export const GET_LIST_CHANNEL_FAILURE = 'GET_LIST_CHANNEL_FAILURE';
export const getListChannelFailure = (errors) => ({
    type: GET_LIST_CHANNEL_FAILURE,
    errors
});



