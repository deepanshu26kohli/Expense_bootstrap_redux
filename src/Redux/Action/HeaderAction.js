export const addHeader = (data)=>{
    console.log("headeraction",data)
    return {
         type : 'ADD_HEADER',
         data : data
    }
}
export const fetchedHeaderData = ()=>{
    // console.log(data)
    return {
        type : 'FETCH_HEADER_JSON'
    }
}