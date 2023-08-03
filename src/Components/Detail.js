import React from 'react'
import { useSelector } from 'react-redux'
import "../Styles/Detail.css"
const Detail = (props) => {
  const details = useSelector((state)=>state.DetailTransactionData)
  // console.log("details of comp",details)
  return (
    <div>
      <h5>Detail</h5>
        <div className='row  d-flex flex-column mydetail-box p-3'>
          <div><strong>Header: </strong><span>{details.Header}</span></div>
          <div><strong>Amount: </strong><span>{details.Amount}</span></div>
          <div><strong>Type: </strong><span>{details.Type}</span></div>
          <div><strong>Date: </strong><span>{details.Date}</span></div>
          <div><strong>Notes: </strong><span>{details.Note}</span></div>
        </div>
      <button className='btn-dark' onClick={()=>{props.setShowDetail(false)}} >Back</button>
    </div>
  )
}

export default Detail
