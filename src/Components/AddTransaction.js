import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTransaction } from '../Redux/Action/TransactionAction'

const AddTransaction = (props) => {
    const bankListResult = useSelector((state) => state.BankData)
    const headerResult = useSelector((state) => state.headerData)
    
    const dispatch = useDispatch()
    const formref = useRef(null)
    const modeRef = useRef("")
    const [amount, setAmount] = useState(0)
    const [header, setHeader] = useState("")
    const [color, setColor] = useState("#rrggbb")
    const [type, setType] = useState("")
    const [mode, setMode] = useState("")
    const [bankName, setBankName] = useState(null)
    const [holderName, setHolderName] = useState(null)
    const [accountNumber, setAccountNumber] = useState(null)
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [note, setNote] = useState("")
    function myHeader(e){
        const selectedIndex = e.target.selectedIndex
        setHeader(headerResult[selectedIndex].data.Header)
        console.log("after selecting",headerResult[selectedIndex].data.Color)
        setColor(headerResult[selectedIndex].data.Color)
       
    }
    function myBank(e){
        const selectedIndex = e.target.selectedIndex;
        setBankName(bankListResult[selectedIndex].data.bankName)
        setHolderName(bankListResult[selectedIndex].data.holderName)
        setAccountNumber(bankListResult[selectedIndex].data.accountNumber)
    }
    function submitTransaction(e) {
        e.preventDefault()
        let newTransaction = { "Amount": amount, "Header": header, "Type": type, "Date": date, "Note": note , "mode" : mode , "bankName" :  bankName , "holderName" : holderName , "accountNumber" : accountNumber , "Color" : color } 
        setAmount(0)
        setHeader("")
        setType("")
        setDate(new Date())
        setNote("")
        dispatch(addTransaction(newTransaction))
        formref.current.reset();
        // prompt("Transaction Added Successfully")
    }
    return (
        <>
            <h5>Add Transaction</h5>
            <button className=" m-3 btn-dark" onClick={() => { props.setHeaderModal(true) }} style={{ cursor: "pointer" }}>Add New Header</button>
            <form ref={formref} onSubmit={submitTransaction}>
                <div className="form-group">
                    <label >Amount</label>
                    <input type="number" className="form-control" placeholder="Enter amount" onChange={(event) => { setAmount(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label >Header</label>

                    <select className="form-control" onChange={myHeader}>
                        <option value="">Select Header</option>
                        {
                            headerResult && headerResult.map((e, id) => {
                                // console.log(e.data.Color)
                                return <option key={id} value={id}>{e.data.Header}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group" >
                    <label >Type of transaction</label>
                    <select value={type} className="form-control" onChange={(event) => { setType(event.target.value) }} >
                        <option value="">Select Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                        <option value="Purchase">Purchase</option>
                        <option value="Sale">Sale</option>
                        <option value="Investment">Investment</option>
                    </select>
                </div>
                <div className="form-group" >
                    <label >Mode of transaction</label>
                    <select ref={modeRef} value={mode} className="form-control" onChange={(event) => { setMode(event.target.value) }} >
                        <option value="">Select Mode</option>
                        <option value="Cash">Cash</option>
                        <option value="Add Bank">Add Bank</option>
                    </select>
                </div>
                {
                    modeRef.current.value === "Add Bank" ? <div className="form-group" >
                        <label >Select Bank</label>
                        <select className="form-control" onChange={myBank} >
                            <option value="">Bank List</option>
                            {  
                                bankListResult && bankListResult.map((e,id)=>{
                                    return <option key={id} value={id}>
                                        {e.data.bankName}--{e.data.holderName}
                                        </option>
                                })
                            }
                        </select>
                    </div> : ""
                }
                <div className="form-group">
                    <label >Date</label>
                    <input type="date" className="form-control" value={date} onChange={(event) => { setDate(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label >Add Note here</label>
                    <textarea className="form-control" onChange={(event) => { setNote(event.target.value) }} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </>
    )
}

export default AddTransaction
