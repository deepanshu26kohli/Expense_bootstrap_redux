import React from 'react'

const AddTransaction = (props) => {
    return (
        <>
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
                <div class="form-group">
                    <label for="exampleTextarea">Add Note here</label>
                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </>
    )
}

export default AddTransaction
