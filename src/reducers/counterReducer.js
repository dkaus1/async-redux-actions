import actionTypes from '../actions'

const counterInitialState = {
    counter: 1
}

const counterReducer = (state = counterInitialState, action) => {
    switch(action.type) {
        case actionTypes.counter.INCREMENT:
            return {...state, counter: state.counter+1 }
        case actionTypes.counter.DECREMENT:
            return {...state, counter: state.counter-1 }
        default:
            return state;
    }
}
export default counterReducer;
