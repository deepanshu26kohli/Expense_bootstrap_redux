import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/TransactionHistory.css"
import { useDispatch, useSelector } from 'react-redux'
import { detailAction } from '../Redux/Action/DetailAction'
const TransHistory = (props) => {

  let Transactionresult = useSelector((state) => state.transactionData)

  // console.log("intransHistory",Transactionresult)

  const dispatch = useDispatch()
  const [numberOfTrans, setNumberOfTrans] = useState(5)
  const numRef = useRef()
  const handleDetail = (event) => {
    event.preventDefault()
    const id = event.target.dataset.id;
    dispatch(detailAction(id))
    props.setShowDetail(true)
  }
  const handleRec = (e) => {
    if (numRef.current.value == "") {
      setNumberOfTrans(5)
    }
    else {
      setNumberOfTrans(e.target.value)
    }
  }
  return (
    <>
      <div className='row py-3 justify-content-between'>
        <div className="col-md-6 col-12">
          <h5>Transaction History </h5>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-md-end">
          <input className='' ref={numRef} type="number" placeholder='Records' onChange={(e) => { handleRec(e) }} />
        </div>
      </div>
      <div className="table-responsive border rounded">
        <table className="table table-striped">
          <thead className=''>
            <tr>
              <th scope="col">Header</th>
              <th scope="col">Type</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            {
              Transactionresult && Transactionresult.slice(0, numberOfTrans).map((e, id) => {
                return <tr key={id}>
                  <td>{e.Header.Header}</td>
                  <td>{e.Type}</td>
                  <td>{e.Amount}</td>
                  <td>{e.Date}</td>
                  <td><Link onClick={handleDetail} className="detail" data-id={e.id}>Detail</Link></td>
                </tr>
              })
            }

          </tbody>
        </table>

        {Transactionresult.length ? <Link to="/alltransactions" ><button className='btn-dark m-3'>Check All Transactions</button></Link> : ""}
      </div>
    </>
  )
}

export default TransHistory
