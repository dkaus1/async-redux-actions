import keyMirror from 'keymirror';

const actionTypes = {
	counter: keyMirror({
		INCREMENT: null,
		DECREMENT: null,
    }),
    saga: keyMirror({
		FETCH_USERS_REQUEST: null,
        FETCH_USERS_SUCCESS: null,
        FETCH_USERS_ERROR: null,
    }),
};

export default actionTypes;
