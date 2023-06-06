import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {productReducer as product} from './product';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    product,
});
export default persistReducer(rootPersistConfig, rootReducer);