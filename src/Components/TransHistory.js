import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/TransactionHistory.css"
const TransHistory = () => {
  return (
    <>
      <h5>Transaction History</h5>
                        <table class="table">
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
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><Link to="/detail"  className="detail">Detail</Link></td>
                                    
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><Link to="/detail" className="detail">Detail</Link></td>
                                  
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><Link to="/detail" className="detail">Detail</Link></td>
                                 
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><Link to="/detail" className="detail">Detail</Link></td>
                                  
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><Link to="/detail" className="detail">Detail</Link></td>
                                </tr> 
                            </tbody>
                        </table>
                        <Link to="/alltransactions" className='checkalltrans'>Check All Transactions</Link>
    </>
  )
}

export default TransHistory
