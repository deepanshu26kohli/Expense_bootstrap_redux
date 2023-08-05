import {takeEvery , put , call} from 'redux-saga/effects'
import axios from 'axios';
function* postbank(action){
    // console.log("bankSaga",action.data)
    const data = action.data
    try{
        const response = yield call(axios.post, ' http://localhost:5000/bank', data);
        // console.log("bankSagaAfterCall",response)
        yield put({ type: 'BANK_SUCCESS', data: response });
    }catch(err){
        // console.log("error in bankSaga",err)
        yield put({ type: 'BANK_ERROR', data : err });
    }   
}
function* BankSaga(){
    yield takeEvery('ADD_BANK',postbank)
}
export default BankSaga