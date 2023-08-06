
import axios from 'axios';
 
export function headerData(state=[], action) {
    switch (action.type) {
        case 'HEADER_SUCCESS':
            return [...state, action.data]
        case 'HEADER_ERROR':
            return action.data
        case 'HEADER_JSON_SUCCESS':
            // console.log("json-header-reducer",action.data)
            return action.data
        default:
            return state
    }
}