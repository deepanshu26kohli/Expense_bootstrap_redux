import React from 'react'
import { useSelector } from 'react-redux'
import "../Styles/Detail.css"
const Detail = (props) => {
  const details = useSelector((state)=>state.DetailTransactionData)
  // console.log("details of comp",details)
  return (
    <div className='row mydetail-box border rounded mx-1 mx-md-0'>
      <div className="col-12 pt-3">
          <h5>Detail of Transaction</h5>
      </div>
      <div className="col-12">
      <div><strong>Header: </strong><span>{details.Header.Header}</span></div>
      </div>
      <div className="col-12">
      <div><strong>Amount: </strong><span>{details.Amount}</span></div>
      </div>
      <div className="col-12">
      <div><strong>Type: </strong><span>{details.Type}</span></div>
      </div>
      <div className="col-12">
      <div><strong>Date: </strong><span>{details.Date}</span></div>
      </div>
      <div className="col-12">
      <div><strong>Mode: </strong><span>{details.mode}</span></div>
      </div>
      {
            details.mode !== "Cash" && <>
            <div className="col-12">
            <div><strong>Bank Name: </strong><span>{details.bank.bankName}</span></div>
            </div>
           <div className="col-12">
           <div><strong>Holder Name: </strong><span>{details.bank.holderName}</span></div>
           </div>
           <div className="col-12">
           <div><strong>Account Number: </strong><span>{details.bank.accountNumber}</span></div>
           </div>
            </>
      }
          <div className="col-6">
          <div><strong>Notes: </strong><i>{details.Note}</i></div>
          </div>
          <div className="col-12">
          <button className='btn-dark my-2' onClick={()=>{props.setShowDetail(false)}} >Back</button>
          </div>
    </div>
  )
}

export default Detail
