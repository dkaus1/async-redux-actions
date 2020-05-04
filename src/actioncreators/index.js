import actionTypes from '../actions'
console.log("actionTypes", actionTypes)


export const increment = ()  => ({
    type: actionTypes.counter.INCREMENT
});

export const decrement = ()  => ({
    type: actionTypes.counter.DECREMENT
});