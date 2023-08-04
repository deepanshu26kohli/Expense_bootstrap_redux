export const addHeader = (data)=>{
    console.log("headeraction",data)
    return {
         type : 'ADD_HEADER',
         data : data
    }
}