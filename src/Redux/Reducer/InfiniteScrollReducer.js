export function InfiniteScrollTransactionData(state = [], action) {
    switch (action.type) {
        case "FETCH_MORE_TRANSACTION_SUCCESS":
            console.log("infred",state)
            return [action.data,...state] 
        default:
            return state
    }
}