import { all } from 'redux-saga/effects';
import  HeaderSaga  from './HeaderSaga';
import  TransactionSaga  from './TransactionSaga';
import  InfiniteScrollTransactions  from './InfiniteScrollSaga';
export default function* rootSaga() {
  yield all([
    HeaderSaga(),
    TransactionSaga(),
    InfiniteScrollTransactions(),
  ]);
}