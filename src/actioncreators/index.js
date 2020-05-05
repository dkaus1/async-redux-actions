import actionTypes from '../actions'
console.log("actionTypes", actionTypes)


export const increment = ()  => ({
    type: actionTypes.counter.INCREMENT
});

export const decrement = ()  => ({
    type: actionTypes.counter.DECREMENT
});

export const sagaFetchUserRequest = () => ({
    type: actionTypes.saga.FETCH_USERS_REQUEST
});

export const sagaFetchUserSuccess = data => ({
    type: actionTypes.saga.FETCH_USERS_SUCCESS,
    data
});

export const sagaFetchUserError = err => ({
    type: actionTypes.saga.FETCH_USERS_ERROR,
    payload: err
});

export const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data =  await response.json();
        return data;
    }
    catch(e) {
        console.log(e);
    }
}