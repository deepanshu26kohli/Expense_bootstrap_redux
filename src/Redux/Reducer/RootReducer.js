import { combineReducers } from "redux";
import { headerData } from "./HeaderReducer";
import { transactionData } from "./TransactionReducer";
 export default combineReducers(
    { headerData , transactionData}
 )