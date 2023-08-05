export const fetchMoreTransactions = (search,dateSearch) => {
  // console.log("InfiniteScrollAction",currentPage)
    return{
  type: "FETCH_MORE_TRANSACTIONS",
  search : search,
  dateSearch : dateSearch
}};


