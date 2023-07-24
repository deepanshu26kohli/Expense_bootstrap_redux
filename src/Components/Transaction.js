import React from 'react'

const Transaction = () => {
    return (
        <>
            <div className="container  mt-3">
                <div className="row d-flex justify-content-between ">
                    <div className="col-4  d-flex flex-column justify-content-center align-items-center bg-primary p-3">
                        <h5>Add Transaction</h5>
                        <form>
                            <div class="form-group">
                                <label for="lastName">Last Name:</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" />
                            </div>
                            <div class="form-group">
                                <label for="country">Country:</label>
                                <select class="form-control" id="country">
                                    <option value="">Select Country</option>
                                    <option value="usa">USA</option>
                                    <option value="canada">Canada</option>
                                    <option value="uk">UK</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="gender">Gender:</label>
                                <select class="form-control" id="gender">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="birthdate">Birthdate:</label>
                                <input type="date" class="form-control" id="birthdate" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-7 d-flex d-flex flex-column  align-items-center bg-warning p-3">
                        <h5>Transaction History</h5>

                        <table class="table table-striped table-bordered">
                            <thead class="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Header 1</th>
                                    <th>Header 2</th>
                                    <th>Header 3</th>
                                    <th>Header 4</th>
                                    <th>Header 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Record 1-1</td>
                                    <td>Record 1-2</td>
                                    <td>Record 1-3</td>
                                    <td>Record 1-4</td>
                                    <td>Record 1-5</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Record 2-1</td>
                                    <td>Record 2-2</td>
                                    <td>Record 2-3</td>
                                    <td>Record 2-4</td>
                                    <td>Record 2-5</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Record 3-1</td>
                                    <td>Record 3-2</td>
                                    <td>Record 3-3</td>
                                    <td>Record 3-4</td>
                                    <td>Record 3-5</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Record 4-1</td>
                                    <td>Record 4-2</td>
                                    <td>Record 4-3</td>
                                    <td>Record 4-4</td>
                                    <td>Record 4-5</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Record 5-1</td>
                                    <td>Record 5-2</td>
                                    <td>Record 5-3</td>
                                    <td>Record 5-4</td>
                                    <td>Record 5-5</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Record 6-1</td>
                                    <td>Record 6-2</td>
                                    <td>Record 6-3</td>
                                    <td>Record 6-4</td>
                                    <td>Record 6-5</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Record 7-1</td>
                                    <td>Record 7-2</td>
                                    <td>Record 7-3</td>
                                    <td>Record 7-4</td>
                                    <td>Record 7-5</td>
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
