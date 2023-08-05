import React, {useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
const EditBank = (props) => {
    const dispatch = useDispatch()
    const result = useSelector((state)=>state.GetDataToEditReducer)
    // console.log("result in edit comp",result)
    const formRef = useRef()
    const [bankName,setBankName] = useState("")
    const [holdername,setHolderName] = useState("")
    const [accountNumber,setAccountNumber] = useState("") 
    const editBank = (e)=>{
          e.preventDefault()
          let updateBank = {"bankName":bankName,"holderName":holdername,"accountNumber":accountNumber}
          setBankName("")
          setHolderName("")
          setAccountNumber("")
        //   dispatch(addbank(newBank))
          formRef.current.reset()
    }
  return (
    <div className='col-5 px-3  py-3 rounded border'>
    <h5>Edit Bank</h5>
    <form ref={formRef} className='d-flex flex-column' onSubmit={editBank}>
            <label>Bank Name:</label>
            <input type="text" value={result.data.bankName} placeholder='Bank Name' className='w-50 pl-2' onChange={(e)=>{setBankName(e.target.value)}} />
            <label className='mt-3'>Account Holder Name:</label>
            <input type="text" value={result.data.holderName} placeholder='Account Holder Name' className='w-50 pl-2' onChange={(e)=>{setHolderName(e.target.value)}}/>
            <label className='mt-3'>Account Number:</label>
            <input type="text" value={result.data.accountNumber} placeholder='Account Number' className='w-50 pl-2' onChange={(e)=>{setAccountNumber(e.target.value)}}/>
        <button className='btn-dark mt-4 w-25' type='submit'  >Edit details</button>
    </form>
    <button className='btn-dark mt-4 w-25' onClick={()=>props.showEdit(false)}>Back</button>
</div>
  )
}

export default EditBank

