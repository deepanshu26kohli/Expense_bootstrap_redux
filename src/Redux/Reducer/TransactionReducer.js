export function transactionData(state = [], action) {
    // console.log(action.data)
    switch (action.type) {
        case 'TRANSACTION_SUCCESS':
            return [action.data,...state] 
        default:
            return state
    }
}