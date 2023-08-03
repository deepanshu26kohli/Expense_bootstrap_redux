import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className='pt-3  container'>
                <div className="row  justify-content-between d-flex flex-row">
                    <div className="col-6 col-lg-4 col-md-4 col-sm-4 col-xs-6  d-flex align-items-center justify-content-start">
                        <h2 className='logo'>ExpenseManager</h2>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4 col-sm-4 col-xs-6   d-flex flex-column align-items-center justify-content-end">
                   
                            <h4 className='head-content'>Hi,User!</h4>
                            
                            <h6 className='text-muted head-content-h6'>Welcome to Expense Manager</h6>
                    </div>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
        </>
    )
}

export default Header
