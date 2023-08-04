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
                 <p>{e.data.bankname}</p>
          </div>

        })
      }
    </div>
  )
}

export default SettingsBankList
