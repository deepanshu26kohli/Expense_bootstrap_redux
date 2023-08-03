export function DetailTransactionData(state = [], action) {
    switch (action.type) {
        case 'FETCH_TRANSACTION_DETAIL_SUCCESS':
            // console.log("detailReducer",action.data)
            return action.data
        default:
            return state
    }
}