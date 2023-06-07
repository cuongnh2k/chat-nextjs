import {createSelector} from 'reselect';

const stateListChannel = state => state.getListChannelReducer;
// toan bo state trong phan product

export const getLoadingProduct = createSelector(
    stateListChannel,
    state => state.loading
)
export const getErrorProduct = createSelector(
    stateListChannel,
    state => state.error
)
const getAllDataProducts = createSelector(
    stateListChannel,
    state => state.data
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