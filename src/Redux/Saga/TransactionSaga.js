import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
function* postTransaction(action){
    // console.log("transSaga",action.data)
    const data = action.data
    try{
        const response = yield call(axios.post, ' http://localhost:5000/transactions', data);
        // console.log("transSagaAfterCall",response)
        yield put({ type: 'TRANSACTION_SUCCESS', data: response.data });
    }catch(err){
        // console.log("error in transSaga",err)
        yield put({ type: 'TRANSACTION_ERROR', data : err });
    } 
}
function* fetchJsonTransaction(action){
    try{
        const response = yield call(axios.get, ' http://localhost:5000/transactions');
        // console.log("json-saga-trans",response.data);
        yield put({ type: 'TRANSACTION_JSON_SUCCESS', data: response.data });
    }catch(err){
        yield put({ type: 'HEADER_JSON_ERROR', data : err });
    }
}

function* TransactionSaga(){
   
    yield takeLatest('FETCH_TRANSACTION_JSON',fetchJsonTransaction)
    yield takeEvery('ADD_TRANSACTION',postTransaction)
}
export default TransactionSaga