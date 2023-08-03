export const fetchMoreTransactions = (currentPage,search) => {
  console.log("InfiniteScrollAction",currentPage)
    return{
  type: "FETCH_MORE_TRANSACTIONS",
  data: currentPage,
  search : search
}};


