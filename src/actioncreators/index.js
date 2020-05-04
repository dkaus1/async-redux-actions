import actionTypes from '../actions'
console.log("actionTypes", actionTypes)


export const increment = ()  => ({
    type: actionTypes.counter.INCREMENT
});

export const decrement = ()  => ({
    type: actionTypes.counter.DECREMENT
});

export const thunkFetchUserRequest = () => ({
    type: actionTypes.thunk.FETCH_USERS_REQUEST
});

export const thunkFetchUserSuccess = user => ({
    type: actionTypes.thunk.FETCH_USERS_SUCCESS,
    payload: user
});

export const thunkFetchUserError = err => ({
    type: actionTypes.thunk.FETCH_USERS_ERROR,
    payload: err
});

export const fetchUsers = () => {
    return (disptach) => {
        disptach(thunkFetchUserRequest());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                disptach(thunkFetchUserSuccess(data));
            })
            .catch(err => {
                const errMsg = err.message;
                disptach(thunkFetchUserError(errMsg));
            })
    }
}