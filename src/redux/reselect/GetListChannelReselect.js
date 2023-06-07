import {createSelector} from 'reselect';

const stateData = state => state.getListChannelReducer;
// toan bo state trong phan product

export const getLoading = createSelector(
    stateData,
    state => state.loading
)
export const getError = createSelector(
    stateData,
    state => state.error
)
export const getData = createSelector(
    createSelector(
        stateData,
        state => state.data
    ),
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