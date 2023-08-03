import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/TransactionHistory.css"
import { useDispatch, useSelector } from 'react-redux'
import { detailAction } from '../Redux/Action/DetailAction'
const TransHistory = (props) => {
    let Transactionresult = useSelector((state)=>state.transactionData)
    const dispatch = useDispatch()
    const [numberOfTrans,setNumberOfTrans] = useState(5)
    const numRef = useRef()
    const handleDetail = (event)=>{
      const id = event.target.dataset.id;
      console.log("detail comp",id)
      dispatch(detailAction(id))
      props.setShowDetail(true)
    }
    const handleRec = (e)=>{
      if (numRef.current.value == ""){
          setNumberOfTrans(5)
      } 
      else{
        setNumberOfTrans(e.target.value)
      }
    }
  return (
    <>
    <div className='my-trans-his-head'>
    <h5>Transaction History </h5>
    <input className='mb-2 my-inp-rec' ref={numRef} type="number" placeholder='Records' onChange={(e)=>{handleRec(e)}}/>
    </div>
                        <table className="table">
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
                                   Transactionresult && Transactionresult.slice(0,numberOfTrans).map((e,id)=>{
                                    return <tr key = {id}>
                                    <td>{e.data.Header}</td>
                                    <td>{e.data.Type}</td>
                                    <td>{e.data.Amount}</td>
                                    <td>{e.data.Date}</td>
                                    <td><Link onClick={handleDetail} className="detail" data-id={e.data.id}>Detail</Link></td>
                                </tr>
                                   })
                                }
                                 
                            </tbody>
                        </table>
                       {Transactionresult.length?<Link to="/alltransactions" className='checkalltrans'>Check All Transactions</Link>:""}
    </>
  )
}

export default TransHistory
