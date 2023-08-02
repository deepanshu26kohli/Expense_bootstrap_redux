import {takeEvery , put , call} from 'redux-saga/effects'
import axios from 'axios';
function* postTransaction(action){
    // console.log("transSaga",action.data)
    const data = action.data
    try{
        const response = yield call(axios.post, ' http://localhost:5000/transactions', data);
        // console.log("transSagaAfterCall",response)
        yield put({ type: 'TRANSACTION_SUCCESS', data: response });
    }catch(err){
        // console.log("error in transSaga",err)
        yield put({ type: 'TRANSACTION_ERROR', data : err });
    }
   
    
}

function* TransactionSaga(){
    yield takeEvery('ADD_TRANSACTION',postTransaction)
}
export default TransactionSaga