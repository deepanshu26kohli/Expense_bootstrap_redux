export const fetchMoreTransactions = (currentPage,search,dateSearch) => {
  console.log("InfiniteScrollAction",currentPage)
    return{
  type: "FETCH_MORE_TRANSACTIONS",
  data: currentPage,
  search : search,
  dateSearch : dateSearch
}};


