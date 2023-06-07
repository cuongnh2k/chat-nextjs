import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {getListChannelReducer} from './GetListChannelReducer';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    getListChannelReducer,
});
export default persistReducer(rootPersistConfig, rootReducer);