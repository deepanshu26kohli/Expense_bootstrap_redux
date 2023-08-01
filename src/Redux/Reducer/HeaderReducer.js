export function headerData(state = {}, action) {
    switch (action.type) {
        case 'HEADER_SUCCESS':
            return action.data
        default:
            return data
    }
}