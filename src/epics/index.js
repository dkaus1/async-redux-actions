import { combineEpics } from 'redux-observable';
import {observableFetchUserSuccess, observableFetchUserError}  from '../actioncreators/index'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import actionTypes from '../actions/index';


function fetchUsers(action$) { // action$ is a stream of actions
    // action$.ofType is the outer Observable
    return action$
        .ofType(actionTypes.ob.FETCH_USERS_REQUEST) 
        .switchMap(() => {
            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(res => observableFetchUserSuccess(res))
        })
        .catch(error => Observable.of(observableFetchUserError(error.message)))
}

const rootEpic =  combineEpics(fetchUsers);

export default rootEpic;


