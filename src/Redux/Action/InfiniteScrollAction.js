export const fetchMoreTransactions = (currentPage) => {
  console.log("InfiniteScrollAction",currentPage)
    return{
  type: "FETCH_MORE_TRANSACTIONS",
  data: currentPage,
}};


// export const fetchMoreTransactionsSuccess = (data) => (
//     {
//   type: "FETCH_MORE_TRANSACTIONS_SUCCESS",
//   data: data,
// });

// export const fetchMoreTransactionsFailure = (error) => ({
//   type: "FETCH_MORE_TRANSACTIONS_FAILURE",
//   data: error,
// });