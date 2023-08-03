import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreTransactions } from '../Redux/Action/InfiniteScrollAction';
import '../Styles/checkalltrans.css'
const CheckAllTrans = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionData = useSelector((state) => state.InfiniteScrollTransactionData);
  console.log("checkall",transactionData)
  const fetchMoreData = () => {
    if (!loading && hasMore) {
      setLoading(true);
      console.log(currentPage)
      dispatch(fetchMoreTransactions(currentPage)); 
      setCurrentPage(prevPage => prevPage + 1);
      setLoading(false);
    }
  };

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
    const threshold = 200;

    if (distanceFromBottom < threshold) {
      fetchMoreData();
    }
  };

  return (
    <div className='mt-3 container'>
      <h3 className='text-center'>All Transactions</h3>
      <input type="text" placeholder='Search Transaction' />
      <div className='row mt-3'>
      {
          transactionData.length ? transactionData[0].data.reverse().map((e, id) => {
            return <div key={id} className='col-md-4 col-12  d-flex flex-column '>
              <div className='border my-trans-card rounded m-3 p-3 d-flex flex-column align-items-start'>
                <div><strong>Header: </strong><span>{e.Header}</span></div>
                <div><strong>Amount: </strong><span>₹{e.Amount}</span></div>
                 <div><strong>Type: </strong><span>{e.Type}</span></div>
                 <div><strong>Date: </strong><span>{e.Date}</span></div>
                 <div><strong>Notes: </strong><span>{e.Note}</span></div>
               </div>
             </div> 
           }): <p>No Transactions to show</p>
         }
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more items to load.</p>}
    </div>
  );
};

export default CheckAllTrans;
