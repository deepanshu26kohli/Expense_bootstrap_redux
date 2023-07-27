import React from 'react'
import "../Styles/HeaderModal.css"
const HeaderModal = () => {
    return (
        <div className='box'>
            <div className='min-box w-25  rounded '>
                <button className='cross btn-dark'>X</button>
            <form className='mt-5 '>
                <div class="form-group form">
                    <input type="text" class="form-control input" id="lastName" placeholder="Enter Header" />
                    <button className='btn-dark'>Add Header</button>
                </div>
            </form>
            </div>
           
        </div>
    )
}

export default HeaderModal
