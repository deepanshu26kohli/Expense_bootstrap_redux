export function BankData(state = [], action) {
    switch (action.type) {
        case 'BANK_SUCCESS':
            return [action.data,...state] 
        case 'DELETE_BANK_SUCCESS':
            //  state.filter((bank) => bank.id !== action.data.id)
             return [action.data]
        case 'BANK_JSON_SUCCESS':
            return action.data
        default:
            return state
    }
}