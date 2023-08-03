import { combineReducers } from "redux";
import { headerData } from "./HeaderReducer";
import { transactionData } from "./TransactionReducer";
import { InfiniteScrollTransactionData } from "./InfiniteScrollReducer";
import { DetailTransactionData } from "./DetailReducer";
import { BankData } from "./BankReducer";
 export default combineReducers(
    { headerData , transactionData , InfiniteScrollTransactionData , DetailTransactionData, BankData}
 )