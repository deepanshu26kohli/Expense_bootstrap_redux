import {takeEvery , put } from 'redux-saga/effects'

function* postHeader(action){
    const data = action.data
    const response = yield call(axios.post, ' http://localhost:5000/headers', data);
    yield put({ type: 'HEADER_SUCCESS', data: response.data });
}

function* headerSaga(){
    yield takeEvery('ADD_HEADER',postHeader)
}
export default headerSaga