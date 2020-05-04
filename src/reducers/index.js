import counterReducer  from './counterReducer';
import thunkReducer  from './thunkReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    thunk: thunkReducer,
});

export default rootReducer;
