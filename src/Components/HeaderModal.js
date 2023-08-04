import React, { useRef, useState } from 'react'
import "../Styles/HeaderModal.css"
import { useDispatch } from 'react-redux';
import { addHeader } from '../Redux/Action/HeaderAction';
const HeaderModal = (props) => {
    const formref = useRef(null)
    const [header, setHeader] = useState("")
    const [color,setColor] = useState("#rrggbb")
    const dispatch = useDispatch()
    function submitHeader(e) {
        e.preventDefault()
        let newHeader = {"Header":header , "Color":color}
        setHeader("")
        setColor("#rrggbb")
        dispatch(addHeader(newHeader))
        formref.current.reset();
        alert("Header Added Successfully")
    }
    return (
        <div className='box'>
            <div className='min-box  d-flex flex-column align-items-center justify-content-around   rounded '>
                <button className="cross" onClick={() => { props.setHeaderModal(false) }}>X</button>
                <form ref={formref}className=' d-flex flex-column align-items-center justify-content-around' onSubmit={submitHeader} >
                    <input type="text" placeholder='Enter Header' onChange={(event) => { setHeader(event.target.value) }} />
                    <label>Color Code: </label>
                    <input type="color"  onChange={(event) => { setColor(event.target.value) }} />
                    <button className='btn-dark mt-5' type='submit' >Add Header</button>
                </form>
                <button className='btn-dark' onClick={() => { props.setHeaderModal(false) }}>Cancel</button>
            </div>
        </div>
    )
}

export default HeaderModal
