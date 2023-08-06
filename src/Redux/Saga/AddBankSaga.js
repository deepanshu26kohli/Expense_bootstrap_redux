import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
function* postbank(action){
    // console.log("bankSaga",action.data)
    const data = action.data
    try{
        const response = yield call(axios.post, ' http://localhost:5000/bank', data);
        // console.log("bankSagaAfterCall",response)
        yield put({ type: 'BANK_SUCCESS', data: response.data });
    }catch(err){
        // console.log("error in bankSaga",err)
        yield put({ type: 'BANK_ERROR', data : err });
    }   
}
function* fetchJsonBankData(action){
    // console.log("bankSaga",action.data)
    try{
        const response = yield call(axios.get, ' http://localhost:5000/bank');
        // console.log("bankSagaAfterCall",response)
        yield put({ type: 'BANK_JSON_SUCCESS', data: response.data });
    }catch(err){
        // console.log("error in bankSaga",err)
        yield put({ type: 'BANK_ERROR', data : err });
    }   
}
function* BankSaga(){
    yield takeEvery('ADD_BANK',postbank)
    yield takeLatest('FETCH_JSON_BANK',fetchJsonBankData)
}
export default BankSaga