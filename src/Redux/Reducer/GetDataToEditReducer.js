export function GetDataToEditReducer(state = [], action) {
    // console.log("GetDataToEditReducer",action.data)
    switch (action.type) {
        case 'GET_DATA_TO_EDIT_SUCCESS':
            return action.data
        default:
            return state
    }
}