import { put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
function* fetchMoreTransactionsSaga(action) {

  try {
    const response = yield call(axios.get, "http://localhost:5000/transactions");
    console.log("infsaga", response.data)
    yield put({ type: 'FETCH_MORE_TRANSACTION_SUCCESS', data: response })
  } catch (error) {
    console.log("infsagaerr", error)
    yield put({ type: 'FETCH_MORE_TRANSACTION_ERROR', data : error });
  }
}

function* InfiniteScrollTransactions() {
    console.log("InfiniteScrollTransactions saga started listening.");
  yield takeLatest("FETCH_MORE_TRANSACTIONS", fetchMoreTransactionsSaga);
}
export default InfiniteScrollTransactions;