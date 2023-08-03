import { put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
function* fetchMoreTransactionsSaga(action) {
  const search = action.search
  const dateSearch = action.dateSearch
  try {
    if (dateSearch){
      const response = yield call(axios.get, `http://localhost:5000/transactions?q=${search}&Date=${dateSearch}`);
      console.log("infsaga", response.data)
    yield put({ type: 'FETCH_MORE_TRANSACTION_SUCCESS', data: response })
    }
    else{
    const response = yield call(axios.get, `http://localhost:5000/transactions?q=${search}`); 
    console.log("infsaga", response.data)
    yield put({ type: 'FETCH_MORE_TRANSACTION_SUCCESS', data: response })
    }
   
  } catch (error) {
    console.log("infsagaerr", error)
    yield put({ type: 'FETCH_MORE_TRANSACTION_ERROR', data : error });
  }
}

function* InfiniteScrollTransactions() {
   
  yield takeLatest("FETCH_MORE_TRANSACTIONS", fetchMoreTransactionsSaga);
}
export default InfiniteScrollTransactions;