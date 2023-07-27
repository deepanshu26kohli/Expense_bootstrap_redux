import React from 'react'
import "../Styles/Transaction.css"
const Transaction = () => {
    return (
        <>
            <div className="container  mt-5">
                <div className="row justify-content-between ">
                    <div className="col-12 col-md-4 col-lg-3  d-flex flex-column justify-content-center align-items-center border rounded p-3">
                        <h5>Add Transaction</h5>
                        <form>
                            <div class="form-group">
                                <label for="lastName">Amount</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Enter amount" />
                            </div>
                            <div class="form-group">
                                <label for="country">Header</label>
                                <button type="submit" class="btn-sm m-3 btn-dark" data-toggle="modal" data-target="#exampleModalCenter" style={{ cursor: "pointer" }}>Add New Header</button>
                                
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
                    <div className="col-12 col-md-7 col-lg-8 d-flex d-flex flex-column  align-items-center border rounded pt-3">
                        <h5>Transaction History</h5>
                        <div className='row bg-dark text-light mt-2  py-1'>
                            <div className='col px-lg-4 myText'>
                                ID
                            </div>
                            <div className='col  px-lg-4  myText'>
                                Header
                            </div>
                            <div className='col  px-lg-4 myText'>
                                Type
                            </div>
                            <div className='col  px-lg-4 myText'>
                                Date
                            </div>
                            <div className='col  px-lg-4 myText'>
                                Amount
                            </div>
                            <div className='col  px-lg-4 myText'>
                                Delete
                            </div>
                            <div className='col  px-lg-4 myText'>
                                Update
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}

export default Transaction
