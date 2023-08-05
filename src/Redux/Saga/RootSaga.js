import { all } from 'redux-saga/effects';
import  HeaderSaga  from './HeaderSaga';
import  TransactionSaga  from './TransactionSaga';
import  InfiniteScrollTransactions  from './InfiniteScrollSaga';
import DetailSaga from './DetailSaga';
import BankSaga from './AddBankSaga';
import DeleteBankSaga from './DeleteBankSaga';
import GetDataToEditSaga from './GetDataToEditSaga';
export default function* rootSaga() {
  yield all([
    HeaderSaga(),
    TransactionSaga(),
    InfiniteScrollTransactions(),
    DetailSaga(),
    BankSaga(),
    DeleteBankSaga(),
    GetDataToEditSaga()
  ]);
}