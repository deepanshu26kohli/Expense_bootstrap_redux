import React from 'react'
import "../Styles/HeaderModal.css"
const HeaderModal = (props) => {
    return (
        <div className='box'>
            <div className='min-box  d-flex flex-column align-items-center justify-content-around   rounded '>
                <button className="cross" onClick={()=>{props.setHeaderModal(false)}}>X</button>
                <input type="text" placeholder='Enter Header' />
                <button className='btn-dark'>Add Header</button>
                <button className='btn-dark' onClick={()=>{props.setHeaderModal(false)}}>Cancel</button>
            </div>
        </div>
    )
}

export default HeaderModal
