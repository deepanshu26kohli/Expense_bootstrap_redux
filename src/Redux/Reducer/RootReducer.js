import { combineReducers } from "redux";
import { headerData } from "./HeaderReducer";
import { transactionData } from "./TransactionReducer";
import { InfiniteScrollTransactionData } from "./InfiniteScrollReducer";
 export default combineReducers(
    { headerData , transactionData , InfiniteScrollTransactionData}
 )