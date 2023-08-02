export function headerData(state = [], action) {
    switch (action.type) {
        case 'HEADER_SUCCESS':
            return [...state,action.data]
        case 'HEADER_ERROR':
            return action.data
        default:
            return state
    }
}