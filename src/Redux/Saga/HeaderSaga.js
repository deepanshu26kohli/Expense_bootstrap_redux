import {takeEvery ,takeLatest , put , call} from 'redux-saga/effects'
import axios from 'axios';
function* postHeader(action){
    const data = action.data
    try{
        const response = yield call(axios.post, ' http://localhost:5000/headers', data);
        // console.log("header",response.data);
        yield put({ type: 'HEADER_SUCCESS', data: response.data });
    }catch(err){
        yield put({ type: 'HEADER_ERROR', data : err });
    }
}
function* headerJsonSaga(action){
    
    try{
        const response = yield call(axios.get, ' http://localhost:5000/headers',);
        // console.log("json-saga-header",response.data);
        yield put({ type: 'HEADER_JSON_SUCCESS', data: response.data });
    }catch(err){
        yield put({ type: 'HEADER_JSON_ERROR', data : err });
    }
}

function* headerSaga(){
    yield takeLatest('FETCH_HEADER_JSON',headerJsonSaga)
    yield takeEvery('ADD_HEADER',postHeader)

}
export default headerSaga