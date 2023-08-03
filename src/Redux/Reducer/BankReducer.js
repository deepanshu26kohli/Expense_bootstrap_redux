export function BankData(state = [], action) {
    switch (action.type) {
        case 'BANK_SUCCESS':
            return [action.data,...state] 
        default:
            return state
    }
}