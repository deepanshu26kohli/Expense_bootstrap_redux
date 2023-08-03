export function addbank(data){
    console.log("bank data action",data)
    return {
        type : "ADD_BANK",
        data : data
    }
}