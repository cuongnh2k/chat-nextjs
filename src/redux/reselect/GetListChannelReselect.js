import { createSelector } from 'reselect';

const stateProducts = state => state.product;
// toan bo state trong phan product

export const getLoadingProduct = createSelector(
    stateProducts,
    state => state.loading
)
export const getErrorProduct = createSelector(
    stateProducts,
    state => state.error
)
const getAllDataProducts = createSelector(
    stateProducts,
    state => state.dataProducts
)
export const getData = createSelector(
    getAllDataProducts,
    data => {
        return data.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            thumbnail: item.thumbnail
        }))
    }
)