import actionTypes from '../actions'
console.log("actionTypes", actionTypes)


export const increment = ()  => ({
    type: actionTypes.INCREMENT
});

export const decrement = ()  => ({
    type: actionTypes.DECREMENT
});