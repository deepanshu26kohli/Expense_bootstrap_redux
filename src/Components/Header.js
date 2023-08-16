import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
            <div className='container'>
                <div className="row  justify-content-between ">
                    <div className="col-md-5 col-12   d-flex align-items-center justify-content-start">
                        <Link className='logo' to="/"><h2 >ExpenseManager</h2></Link>
                    </div>
                    <div className="col-md-5 col-12   d-flex flex-column align-items-md-end align-items-start  ">
                            <h4 className='head-content'>Hi,User!</h4>
                            <h6 className='text-muted head-content-h6'>Welcome to Expense Manager</h6>
                            <Link to="/settings"><i style={{color:"black"}} class="fa-solid fa-2x fa-gear"></i></Link>
                    </div>
                </div>
            </div>
    )
}

export default Header
