import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../Styles/SettingsBankList.css"
import { deleteBankAction } from '../Redux/Action/DeleteBankAction'
import { getDataToEditAction } from '../Redux/Action/GetDataToEditAction'
const SettingsBankList = (props) => {
  const dispatch = useDispatch()
  const result = useSelector((state) => state.BankData)
  const getDataToEdit = (e) =>{
    props.showEdit(true)
    // console.log("getDatatoEdit", e.target.dataset.id)
    dispatch(getDataToEditAction(e.target.dataset.id))
  }
  const handleBankDelete = (e) =>{
        // console.log("deleteBankId", e.target.dataset.id)
        dispatch(deleteBankAction(e.target.dataset.id))
  }
  return (
    <div className='col-5 px-3  py-3 rounded border bank-list'>
      <h5>Bank List</h5>
      <hr />
      {
        result.length ? result.map((e, id) => {
          return <div key={id}>
            <div><strong>Bank Name: </strong><span>{e.data.bankName}</span></div>
            <div><strong>Account Holder Name: </strong><span>{e.data.holderName}</span></div>
            <div><strong>Account Number: </strong><span>{e.data.accountNumber}</span></div>
            <div className='row'>
              <div className="col-3"><Link data-id={e.data.id} onClick={getDataToEdit}>Edit</Link></div>
              <div className="col-3"><Link data-id={e.data.id} onClick={handleBankDelete}>Delete</Link></div>
            </div>
            <hr />
          </div>
        }):"Not Added Yet"
      }
    </div>
  )
}

export default SettingsBankList
