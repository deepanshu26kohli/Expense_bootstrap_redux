export const addTransaction = (data)=>{
    console.log("transAction",data)
    return {
         type : 'ADD_TRANSACTION',
         data : data
    }
}