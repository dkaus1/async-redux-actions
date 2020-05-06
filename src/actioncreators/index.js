import actionTypes from '../actions'
console.log("actionTypes", actionTypes)


export const increment = ()  => ({
    type: actionTypes.counter.INCREMENT
});

export const decrement = ()  => ({
    type: actionTypes.counter.DECREMENT
});

export const observableFetchUserRequest = () => ({
    type: actionTypes.ob.FETCH_USERS_REQUEST
});

export const observableFetchUserSuccess = data => ({
    type: actionTypes.ob.FETCH_USERS_SUCCESS,
    data
});

export const observableFetchUserError = err => ({
    type: actionTypes.ob.FETCH_USERS_ERROR,
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