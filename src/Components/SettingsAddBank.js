import React, {useState}from 'react'
import { useDispatch } from 'react-redux'
import { addbank } from '../Redux/Action/AddBankAction'
import { useRef } from 'react'
const SettingsAddBank = () => {
    const dispatch = useDispatch()
    const formRef = useRef()
    const [bankName,setBankName] = useState("")
    const [holdername,setHolderName] = useState("")
    const [accountNumber,setAccountNumber] = useState("") 
    const add_bank = (e)=>{
          e.preventDefault()
          let newBank = {"bankName":bankName,"holderName":holdername,"accountNumber":accountNumber}
          setBankName("")
          setHolderName("")
          setAccountNumber("")
          dispatch(addbank(newBank))
          formRef.current.reset()
    }
  return (
    <div className='col-5 px-3  py-3 rounded border'>
    <h5>Add Bank</h5>
    <form ref={formRef} className='d-flex flex-column' onSubmit={add_bank}>
            <label>Bank Name:</label>
            <input type="text" placeholder='Bank Name' className='w-50 pl-2' onChange={(e)=>{setBankName(e.target.value)}} />
            <label className='mt-3'>Account Holder Name:</label>
            <input type="text" placeholder='Account Holder Name' className='w-50 pl-2' onChange={(e)=>{setHolderName(e.target.value)}}/>
            <label className='mt-3'>Account Number:</label>
            <input type="text" placeholder='Account Number' className='w-50 pl-2' onChange={(e)=>{setAccountNumber(e.target.value)}}/>
        <button className='btn-dark mt-4 w-25' type='submit'  >Add Details</button>
    </form>
</div>
  )
}

export default SettingsAddBank
