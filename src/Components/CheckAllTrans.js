import React from 'react'
import { useSelector } from 'react-redux'
import "../Styles/checkalltrans.css"
import InfiniteScroll from "react-infinite-scroll-component";
const CheckAllTrans = () => {
  let Transactionresult = useSelector((state) => state.transactionData)
  
  return (
    <div className='mt-3 container'>
      <h3 className='text-center'>All Transactions</h3>
      <input type="text" placeholder='Search Transaction' />
      <div className='row  mt-3 '>
        {
          Transactionresult && Transactionresult.map((e, id) => {
            return <div key={id} className='col-md-4 col-12  d-flex flex-column '>
              <div className='border my-trans-card rounded m-3 p-3 d-flex flex-column align-items-start'>
                <div><strong>Header: </strong><span>{e.data.Header}</span></div>
                <div><strong>Amount: </strong><span>₹{e.data.Amount}</span></div>
                <div><strong>Type: </strong><span>{e.data.Type}</span></div>
                <div><strong>Date: </strong><span>{e.data.Date}</span></div>
                <div><strong>Notes: </strong><span>{e.data.Note}</span></div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default CheckAllTrans
