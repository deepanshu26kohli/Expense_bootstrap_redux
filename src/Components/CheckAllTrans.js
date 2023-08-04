import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreTransactions } from '../Redux/Action/InfiniteScrollAction';
import '../Styles/checkalltrans.css'
import { debounce } from 'lodash'
import { Link } from 'react-router-dom';
const CheckAllTrans = () => {
  const searchRef = useRef()
  const dateRef = useRef()
  const resetSearch = ()=>{
    setSearch("")
    setDateSearch("")
    searchRef.current.value = ""
    dateRef.current.value = ""
  }
  const handleSearch = (e) => {
    debounce(() => { setSearch(e.target.value) }, 2000)()
}
  const dispatch = useDispatch();
  const [search,setSearch] = useState("")
  const [dateSearch,setDateSearch] = useState()
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionData = useSelector((state) => state.InfiniteScrollTransactionData);
  console.log("checkall",transactionData)
  const fetchMoreData = () => {
    if (!loading && hasMore) {
      setLoading(true);
      console.log(currentPage)
      if( search.length == 0 || search.length > 3){
        dispatch(fetchMoreTransactions(currentPage,search)); 
      }
     
      setCurrentPage(prevPage => prevPage + 1);
      setLoading(false);
    }
   
  };
  useEffect(()=>{
    if( search.length == 0 || search.length > 3){
      dispatch(fetchMoreTransactions(currentPage,search,dateSearch)); 
    }
  },[search,dateSearch])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [transactionData]); 

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - (scrollY + windowHeight);
    const threshold = 100;
    if (distanceFromBottom < threshold) {
      fetchMoreData();
    }
  };
  return (
    <div className='mt-3 container'>
      <Link to="/">Home</Link>
      <h3 className='text-center'>All Transactions</h3>
      <div className='d-flex justify-content-around mt-3'>
        <input ref={searchRef} type="text" placeholder='Search Transaction' onChange={handleSearch} />
        <div><span>Search by Date: </span><input ref={dateRef} type="date" placeholder='Search by Date' onChange={(event)=>{setSearch(event.target.value)}} /></div>
        <div><button onClick={()=>{resetSearch()}}>Reset Search</button></div>
      </div>
    
      <div className='row mt-3'>
      {
          transactionData.length ? transactionData[0].data.reverse().map((e, id) => {
            console.log("insidemap",e.Color)
            let flag
            if (e.mode == "Add Bank"){
              flag = true
            }
            return <div key={id}   className='col-md-4 col-12  d-flex flex-column '>
              <div style={{border: `2px solid ${e.Color}`}}  className='rounded my-trans-card  m-3 p-3 d-flex flex-column align-items-start'>
                <div><strong>Header: </strong><span>{e.Header}</span></div>
                <div><strong>Amount: </strong><span>₹{e.Amount}</span></div>
                 <div><strong>Type: </strong><span>{e.Type}</span></div>
                 <div><strong>Date: </strong><span>{e.Date}</span></div>
                {flag && (<><div><strong>Bank Name: </strong><span>{e.bankName}</span></div>
                 <div><strong>Account Holder: </strong><span>{e.holderName}</span></div>
                 <div><strong>Account Number: </strong><span>{e.accountNumber}</span></div></>)}
                 <div><strong>Notes: </strong><span>{e.Note}</span></div>
               </div>
             </div> 
           }): <p>No Transactions to show</p>
         }
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default CheckAllTrans;
