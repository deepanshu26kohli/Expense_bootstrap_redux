import {takeEvery , put , call} from 'redux-saga/effects'
import axios from 'axios';
function* postHeader(action){
    const data = action.data
    try{
        const response = yield call(axios.post, ' http://localhost:5000/headers', data);
        yield put({ type: 'HEADER_SUCCESS', data: response });
    }catch(err){
        yield put({ type: 'HEADER_ERROR', data : err });
    }
}

function* headerSaga(){
    yield takeEvery('ADD_HEADER',postHeader)
}
export default headerSaga