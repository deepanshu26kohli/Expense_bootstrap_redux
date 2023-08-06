export function addbank(data){
    // console.log("bank data action",data)
    return {
        type : "ADD_BANK",
        data : data
    }
}
export function fetchBankData(){
    return {
        type : "FETCH_JSON_BANK",
    }
}