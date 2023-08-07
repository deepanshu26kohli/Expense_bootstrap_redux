import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreTransactions } from '../Redux/Action/InfiniteScrollAction';
import '../Styles/checkalltrans.css'
import { debounce } from 'lodash'
const CheckAllTrans = () => {
  const searchRef = useRef()
  const dateRef = useRef()
  const resetSearch = () => {
    setSearch("")
    setDateSearch("")
    searchRef.current.value = ""
    dateRef.current.value = ""
  }
  const handleSearch = (e) => {
    debounce(() => { setSearch(e.target.value) }, 2000)()
  }
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const [dateSearch, setDateSearch] = useState()
  const [x,setX] = useState(false)
  const [sliceUpto,setSLiceUpto] = useState(6)
  const transactionData = useSelector((state) => state.InfiniteScrollTransactionData);//it has no relation with infinite scrolling its just the name infinite scrolling
  const totalHeight = document.documentElement.scrollHeight
  const innerHeight = window.innerHeight
  const [scrollTop,setScrollTop] = useState(document.documentElement.scrollTop)
  // mylogic
  const getMyTransactionData = useSelector((state) => state.transactionData)
  const [myTransactionData,setMyTransactionData] = useState(getMyTransactionData.slice(0,sliceUpto))
  const handleScroll = () => {
    
    setScrollTop(document.documentElement.scrollTop);

    
    if (scrollTop >= totalHeight - innerHeight - 10) {
      setSLiceUpto(sliceUpto + 3); 
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]); 
  useEffect(() => {
    setMyTransactionData(getMyTransactionData.slice(0, sliceUpto));
  }, [sliceUpto]);
  //  mylogicends
  useEffect(() => {
    if (search.length >= 3) {
      setX(true)
      dispatch(fetchMoreTransactions(search, dateSearch));
    }
    if(search.length == 0){
      setX(false)
    }
  }, [search, dateSearch])
  return (
    <div className='mt-3 container'>
      
      <h3 className='text-center'>All Transactions</h3>
      <div className='d-flex justify-content-around mt-3'>
        <input ref={searchRef} type="text" placeholder='Search Transaction' onChange={handleSearch} />
        <div><span>Search by Date: </span><input ref={dateRef} type="date" placeholder='Search by Date' onChange={(event) => { setSearch(event.target.value) }} /></div>
        <div><button onClick={() => { resetSearch() }}>Reset Search</button></div>
      </div>

      <div className='row mt-3'>
        {x?<>  {
          transactionData.length ? transactionData[0].data.reverse().map((e, id) => {
            // console.log("insidemap",e.Color)
            let flag
            if (e.mode == "Add Bank"){
              flag = true
            }
            return <div key={id}   className='col-md-4 col-12  d-flex flex-column '>
              <div   className='rounded my-trans-card  m-3 p-3 d-flex flex-column align-items-start'>
                <div><strong style={{color: `${e.Header.Color}`}}>Header: </strong><span>{e.Header.Header}</span></div>
                <div><strong style={{color: `${e.Header.Color}`}}>Amount: </strong><span>₹{e.Amount}</span></div>
                 <div><strong style={{color: `${e.Header.Color}`}}>Type: </strong><span>{e.Type}</span></div>
                 <div><strong style={{color: `${e.Header.Color}`}}>Date: </strong><span>{e.Date}</span></div>
                {flag && (<><div><strong style={{color: `${e.Header.Color}`}}>Bank Name: </strong><span>{e.bank.bankName}</span></div>
                 <div><strong style={{color: `${e.Header.Color}`}}>Account Holder: </strong><span>{e.bank.holderName}</span></div>
                 <div><strong style={{color: `${e.Header.Color}`}}>Account Number: </strong><span>{e.bank.accountNumber}</span></div></>)}
                 <div><strong>Notes: </strong><i>{e.Note}</i></div>
               </div>
             </div> 
           }): <p>No Transactions to show</p>
         }</>:<>{
          myTransactionData.length ? myTransactionData.map((e, id) => {
            let flag
            if (e.mode == "Add Bank") {
              flag = true
            }
            return <div key={id} className='col-md-4 col-12  d-flex flex-column '>
              <div className='rounded my-trans-card  m-3 p-3 d-flex flex-column align-items-start'>
                <div><strong style={{ color: `${e.Header.Color}` }}>Header: </strong><span>{e.Header.Header}</span></div>
                <div><strong style={{ color: `${e.Header.Color}` }}>Amount: </strong><span>₹{e.Amount}</span></div>
                <div><strong style={{ color: `${e.Header.Color}` }}>Type: </strong><span>{e.Type}</span></div>
                <div><strong style={{ color: `${e.Header.Color}` }}>Date: </strong><span>{e.Date}</span></div>
                <div><strong style={{ color: `${e.Header.Color}` }}>Mode: </strong><span>{e.mode}</span></div>
                {flag && (<><div><strong style={{ color: `${e.Header.Color}` }}>Bank Name: </strong><span>{e.bank.bankName}</span></div>
                  <div><strong style={{ color: `${e.Header.Color}` }}>Account Holder: </strong><span>{e.bank.holderName}</span></div>
                  <div><strong style={{ color: `${e.Header.Color}` }}>Account Number: </strong><span>{e.bank.accountNumber}</span></div></>)}
                <div><strong style={{ color: `${e.Header.Color}` }}>Notes: </strong><i>{e.Note}</i></div>
              </div>
            </div>
          }) : <p>No Transactions to show</p>
        }</>}
      </div>
    </div>
  );
};

export default CheckAllTrans;
