export const deleteBankAction = (id) => {
    // console.log('DeleteIdAction',id)
    return {
        type : 'DELETE_BANK',
        id : id
    }
}