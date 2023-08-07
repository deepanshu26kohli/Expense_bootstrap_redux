import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbank } from '../Redux/Action/AddBankAction'
import { useRef } from 'react'
const SettingsAddBank = () => {
  const dispatch = useDispatch()
  const formRef = useRef()
  const [bankName, setBankName] = useState("")
  const [holdername, setHolderName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const add_bank = (e) => {
    e.preventDefault()
    let newBank = { "bankName": bankName, "holderName": holdername, "accountNumber": accountNumber }
    setBankName("")
    setHolderName("")
    setAccountNumber("")
    dispatch(addbank(newBank))
    formRef.current.reset()
  }
  return (
    <div className='row border rounded p-1 mt-3 mx-1 mx-md-0'>
      <div className="col-12 ">
        <h5>Add Bank</h5>
      </div>
      <form ref={formRef} className='col-12 mt-2 row d-flex justify-content-between' onSubmit={add_bank}>
        <div className="col-md-6">
          <label>Bank Name:</label>
          <input type="text" placeholder='Bank Name' className='pl-2' onChange={(e) => { setBankName(e.target.value) }} />
        </div>
        <div className="col-md-6">
          <label >Account Holder Name:</label>
          <input type="text" placeholder='Account Holder Name' className=' pl-2' onChange={(e) => { setHolderName(e.target.value) }} />
        </div>
        <div className="col-md-6">
        <label >Account Number:</label>
        <input type="text" placeholder='Account Number' className='pl-2' onChange={(e) => { setAccountNumber(e.target.value) }} />
        </div>
        <div className="col-12 my-2">
        <button className='btn-dark' type='submit'  >Add Details</button>
        </div>
      </form>
    </div>
  )
}

export default SettingsAddBank
