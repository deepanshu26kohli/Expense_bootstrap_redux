import { put , call, takeLatest} from 'redux-saga/effects'
import axios from 'axios';

function* DeleteBankListSaga(action){
         console.log("insagadeletebankID",action.id)
         try{
         const response = yield call(axios.delete,`http://localhost:5000/bank/${action.id}`)
        //  console.log("after Deletion",response)
         yield put({ type: 'DELETE_BANK_SUCCESS', data: response })   
         }catch(err){
            // console.log("error deleting bank",err)
         }
}

function* DeleteBankSaga(){
    // console.log("delete bank saga started")
    yield takeLatest("DELETE_BANK",DeleteBankListSaga)
}
export default DeleteBankSaga