import { put, call, take} from 'redux-saga/effects';
import axios from 'axios';
function* fetchMoreTransactionsSaga(action) {
    console.log("deep")
  try {
    const response = yield call(axios.get, "http://localhost:5000/transactions");
    console.log("infsaga", response)
    yield put({ type: 'FETCH_MORE_TRANSACTION_SUCCESS', data: response })
  } catch (error) {
    console.log("infsagaerr", error)
    yield put({ type: 'FETCH_MORE_TRANSACTION_ERROR', data : error });
  }
}

export function* InfiniteScrollTransactions() {
  yield take("FETCH_MORE_TRANSACTIONS", fetchMoreTransactionsSaga);
}
