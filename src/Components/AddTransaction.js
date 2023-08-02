import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTransaction } from '../Redux/Action/TransactionAction'

const AddTransaction = (props) => {
    const headerResult = useSelector((state)=>state.headerData)
    const dispatch = useDispatch()
    const formref = useRef(null)
    const [amount,setAmount] = useState(0)
    const [header,setHeader] = useState("")
    const [type,setType] = useState("")
    const [date,setDate] = useState(new Date().toISOString().slice(0, 10))
    const [note,setNote] = useState("")
    function submitTransaction(e) {
        e.preventDefault()
        let newTransaction = {"Amount":amount,"Header":header,"Type":type,"Date":date,"Note":note}
        setAmount(0)
        setHeader("")
        setType("")
        setDate(new Date())
        setNote("")
        dispatch(addTransaction(newTransaction))
        formref.current.reset();
        alert("Transaction Added Successfully")
    }
    return (
        <>
            <h5>Add Transaction</h5>
            <button className=" m-3 btn-dark" onClick={() => { props.setHeaderModal(true) }} style={{ cursor: "pointer" }}>Add New Header</button>
            <form ref={formref} onSubmit={submitTransaction}>
                <div className="form-group">
                    <label >Amount</label>
                    <input type="number" className="form-control" placeholder="Enter amount" onChange={(event)=>{setAmount(event.target.value)}} />
                </div>
                <div className="form-group">
                    <label >Header</label>

                    <select className="form-control" onChange={(event)=>{setHeader(event.target.value)}}>
                        <option value={header}>Select Header</option>
                        {
                          headerResult && headerResult.map((e,id)=>{                                                                                                                                                             
                            return   <option key={id} value={e.data.Header}>{e.data.Header}</option>
                           })
                        }
                    </select>
                </div>
                <div className="form-group" >
                    <label >Type of transaction</label>
                    <select value={type} className="form-control"  onChange={(event)=>{setType(event.target.value)}} >
                        <option value="">Select Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                        <option value="Purchase">Purchase</option>
                        <option value="Sale">Sale</option>
                        <option value="Investment">Investment</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Date</label>
                    <input type="date" className="form-control" value={date} onChange={(event)=>{setDate(event.target.value)}}  />
                </div>
                <div className="form-group">
                    <label >Add Note here</label>
                    <textarea className="form-control" onChange={(event)=>{setNote(event.target.value)}} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </>
    )
}

export default AddTransaction
