export const addTransaction = (data)=>{
    // console.log("transAction",data)
    return {
         type : 'ADD_TRANSACTION',
         data : data
    }
}
export const fetchTransactionData = ()=>{
    return {
        type : 'FETCH_TRANSACTION_JSON',
    }
}