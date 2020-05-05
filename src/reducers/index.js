import sagaReducer  from './sagaReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    saga: sagaReducer,
});

export default rootReducer;
