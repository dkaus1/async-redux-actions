import actionTypes from '../actions';

const sagaInitialState = {
	loading: true,
	data: [],
	error: '',
};

const sagaReducer = (state = sagaInitialState, action) => {
	switch (action.type) {
		case actionTypes.saga.FETCH_USERS_REQUEST:
			return { ...state, loading: true };
		case actionTypes.saga.FETCH_USERS_SUCCESS:
			return { ...state, loading: false, data: action.data, error: '' };
		case actionTypes.saga.FETCH_USERS_ERROR:
			return { ...state, loading: false, data: [], error: action.payload };
		default:
			return state;
	}
};

export default sagaReducer;