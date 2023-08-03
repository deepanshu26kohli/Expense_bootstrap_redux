import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
function* fetchTransactionDetailSaga(action) {
  const id = action.id
  // console.log("detailsagabeforecall",action)
  try {
    const response = yield call(axios.get, `http://localhost:5000/transactions/${id}`);
    // console.log("detailsagaresp",response.data) 
    yield put({ type: 'FETCH_TRANSACTION_DETAIL_SUCCESS', data: response.data })   
  } catch (error) {
    // console.log("detailerr", error)
    yield put({ type: 'FETCH_TRANSACTION_DETAIL_ERROR', data : error });
  }
}
function* DetailSaga(){
    // console.log("detail saga started")
    yield takeEvery("DETAIL_ACTION",fetchTransactionDetailSaga)
}
export default DetailSaga