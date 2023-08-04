import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../Styles/SettingsBankList.css"
const SettingsBankList = () => {
  const result = useSelector((state) => state.BankData)
  console.log("bankListComp", result)
  return (
    <div className='col-5 px-3  py-3 rounded border bank-list'>
      <h5>Bank List</h5>
      <hr />
      {
        result.length && result.map((e, id) => {
          return <div key={id}>
            <div><strong>Bank Name: </strong><span>{e.data.bankName}</span></div>
            <div><strong>Account Holder Name: </strong><span>{e.data.holderName}</span></div>
            <div><strong>Account Number: </strong><span>{e.data.accountNumber}</span></div>
            <div className='row'>
              <div className="col-3"><Link><span>Edit</span></Link></div>
              <div className="col-3"><Link><span>Delete</span></Link></div>
              
              
            </div>

            <hr />
          </div>

        })
      }
    </div>
  )
}

export default SettingsBankList
