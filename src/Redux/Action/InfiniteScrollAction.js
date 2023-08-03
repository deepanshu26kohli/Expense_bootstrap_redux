export const fetchMoreTransactions = (currentPage) => {
  console.log("InfiniteScrollAction",currentPage)
    return{
  type: "FETCH_MORE_TRANSACTIONS",
  data: currentPage,
}};


