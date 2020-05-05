import {takeLatest, call, put} from 'redux-saga/effects'; // Effects are helpers as JS plain objects => convey special meaning to saga middleware to act upon +  there is something special how saga handle promises, saga pauses itself untill promise is resolved
import {fetchUsers} from '../actioncreators/index';
import {sagaFetchUserSuccess}  from '../actioncreators/index'

//worker saga


function* getApiData(){
    const data = yield call(fetchUsers);
    yield put(sagaFetchUserSuccess(data));
    return data;

}


//watcher saga
function* rootSaga(){
   yield takeLatest('FETCH_USERS_REQUEST', getApiData);
}

//watcher saga -> actions -> worker saga

export default rootSaga;