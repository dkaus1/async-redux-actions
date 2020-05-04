import actionTypes from '../actions';

const thunkInitialState = {
	loading: true,
	data: [],
	error: '',
};

const thunkReducer = (state = thunkInitialState, action) => {
	switch (action.type) {
		case actionTypes.thunk.FETCH_USERS_REQUEST:
			return { ...state, loading: true };
		case actionTypes.thunk.FETCH_USERS_SUCCESS:
			return { ...state, loading: false, data: action.payload, error: '' };
		case actionTypes.thunk.FETCH_USERS_ERROR:
			return { ...state, loading: false, data: [], error: action.payload };
		default:
			return state;
	}
};
export default thunkReducer;
