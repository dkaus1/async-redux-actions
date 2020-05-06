import obReducer  from './obReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ob: obReducer,
});

export default rootReducer;
