import React from 'react'
import "../Styles/Transaction.css"
const Transaction = (props) => {
    return (
        <>
            <div className="container  mt-5">
                <div className="row justify-content-between ">
                    <div className="col-12 col-md-4 col-lg-3 h-50 d-flex flex-column justify-content-center align-items-center border rounded p-3">
                        <h5>Add Transaction</h5>
                        <button class=" m-3 btn-dark" onClick={() => { props.setHeaderModal(true) }} style={{ cursor: "pointer" }}>Add New Header</button>
                        <form>
                            <div class="form-group">
                                <label for="lastName">Amount</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Enter amount" />
                            </div>
                            <div class="form-group">
                                <label for="country">Header</label>

                                <select class="form-control" id="country">
                                    <option value="">Select Header</option>
                                    <option value="usa">Salary</option>
                                    <option value="canada">Travel</option>
                                    <option value="uk">Movie</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="gender">Type of transaction</label>
                                <select class="form-control" id="gender">
                                    <option value="">Select Type</option>
                                    <option value="male">Income</option>
                                    <option value="female">Expense</option>
                                    <option value="other">Purchase</option>
                                    <option value="other">Sale</option>
                                    <option value="other">Investment</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="birthdate">Date</label>
                                <input type="date" class="form-control" id="birthdate" />
                            </div>
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 d-flex d-flex flex-column  align-items-center border rounded pt-3">
                        <h5>Transaction History</h5>
                        <table class="table">
                            <thead className='table-dark '>
                                <tr>
                                    <th scope="col">Header</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Update</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>Income</td>
                                    <td>₹50000</td>
                                    <td>28-07-23</td>
                                    <td><button className='btn-dark'>Delete</button></td>
                                    <td><button className='btn-dark'>Update</button></td>
                                </tr>
                                
                               
                            </tbody>
                        </table>


                    </div>
                </div>
            </div >
        </>
    )
}

export default Transaction
