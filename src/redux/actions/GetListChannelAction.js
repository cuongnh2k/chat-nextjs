export const REQUEST_DATA_PRODUCTS = 'REQUEST_DATA_PRODUCTS';
export const requestDataProducts = () => ({
    type: REQUEST_DATA_PRODUCTS
})
// ben tren la nhung action se dc dispatch vao trong middleware redux saga (ko di thang vao trong store)

// cac action cua middleware saga se xu ly khi nhan action khac dispatch vao

export const START_GET_DATA = 'START_GET_DATA';
export const startGetDataProducts = (start) => ({
    type: START_GET_DATA,
    start
});

export const STOP_GET_DATA = 'STOP_GET_DATA';
export const stopGetDataProducts = (stop) => ({
    type: STOP_GET_DATA,
    stop
});

export const GET_DATA_PRODUCTS_SUCCESS = 'GET_DATA_PRODUCTS_SUCCESS';
export const getDataProductSuccess = (products) => ({
    type: GET_DATA_PRODUCTS_SUCCESS,
    products
});

export const GET_DATA_PRODUCTS_FAILURE = 'GET_DATA_PRODUCTS_FAILURE';
export const getDataProductFailure = (errors) => ({
    type: GET_DATA_PRODUCTS_FAILURE,
    errors
});



