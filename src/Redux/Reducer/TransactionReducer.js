export function transactionData(state = [], action) {
    switch (action.type) {
        case 'TRANSACTION_SUCCESS':
            return [action.data,...state] 
        default:
            return state
    }
}