import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/TransactionHistory.css"
import { useSelector } from 'react-redux'
const TransHistory = () => {
    let Transactionresult = useSelector((state)=>state.transactionData)
    
  return (
    <>
      <h5>Transaction History</h5>
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
                                   Transactionresult && Transactionresult.slice(0,5).map((e,id)=>{
                                    return <tr key = {id}>
                                    <td>{e.data.Header}</td>
                                    <td>{e.data.Type}</td>
                                    <td>{e.data.Amount}</td>
                                    <td>{e.data.Date}</td>
                                    <td><Link to="/detail"  className="detail">Detail</Link></td>
                                    
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
