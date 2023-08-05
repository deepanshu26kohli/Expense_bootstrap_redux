import { put , call, takeLatest} from 'redux-saga/effects'
import axios from 'axios';

function* getDataToEditAction(action){
        // console.log("insagagetdatatoeditID",action.id)
        try{
        const response = yield call(axios.get,`http://localhost:5000/bank/${action.id}`)
        // console.log("after getting data in saga",response)
        yield put({ type: 'GET_DATA_TO_EDIT_SUCCESS', data: response })   
        }catch(err){
            // console.log("error getting data in saga",err)
        }
}

function* GetDataToEditSaga(){
    // console.log("get data to saga started")
    yield takeLatest("GET_DATA_TO_EDIT",getDataToEditAction)
}
export default GetDataToEditSaga