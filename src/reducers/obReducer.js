import actionTypes from '../actions';

const obInitialState = {
	loading: true,
	data: [],
	error: '',
};

const sagaReducer = (state = obInitialState, action) => {
	switch (action.type) {
		case actionTypes.ob.FETCH_USERS_REQUEST:
			return { ...state, loading: true };
		case actionTypes.ob.FETCH_USERS_SUCCESS:
			return { ...state, loading: false, data: action.data, error: '' };
		case actionTypes.ob.FETCH_USERS_ERROR:
			return { ...state, loading: false, data: [], error: action.payload };
		default:
			return state;
	}
};

export default sagaReducer;