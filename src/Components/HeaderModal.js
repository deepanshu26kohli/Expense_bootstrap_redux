import React, { useEffect, useRef, useState } from 'react'
import "../Styles/HeaderModal.css"
import { useDispatch } from 'react-redux';
import { addHeader, fetchedHeaderData } from '../Redux/Action/HeaderAction';
import axios from 'axios';
const HeaderModal = (props) => {
    const dispatch = useDispatch()
    const formref = useRef(null)
    const [header, setHeader] = useState("")
    const [color, setColor] = useState("#000000")

    function submitHeader(e) {
        e.preventDefault()
        let newHeader = { "Header": header, "Color": color }
        setHeader("")
        setColor("000000")
        dispatch(addHeader(newHeader))
        formref.current.reset();
        alert("Header Added Successfully")
    }
    return (
        <div className='box'>
            <div className='row bg-light rounded py-3 h-auto w-md-auto w-50 '>
                <div className="col-12 d-flex justify-content-end">
                    <button className='btn-light'onClick={() => { props.setHeaderModal(false) }}>X</button>
                </div>
                <form ref={formref} className='col-12 ' onSubmit={submitHeader} >
                    <div className="col-12">
                        <label>Enter Header </label>
                        <input type="text" placeholder='Enter Header' onChange={(event) => { setHeader(event.target.value) }} />
                    </div>
                    <div className="col-12">
                        <label>Color Code: </label>
                        <input type="color" onChange={(event) => { setColor(event.target.value) }} />
                    </div>
                    <div className="col-12">
                        <button className='btn-dark' type='submit' >Add Header</button>
                    </div>
                </form>
                <div className="col-12">
                    <button className='btn-dark mx-3 my-2' onClick={() => { props.setHeaderModal(false) }}>Cancel</button>
                </div>

            </div>
        </div>
    )
}
export default HeaderModal
