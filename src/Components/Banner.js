import React from 'react'
import "../Styles/Banner.css"
const Banner = () => {
    return (
        <>
            <div className="container banner mt-2">
                <div className="row  ">
                    <div className="col-lg-4 col-md-4 col-12  d-flex align-item-center justify-content-center  rounded p-3">
                        <div className='rounded  box-bal  d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span class="fa-stack fa-2x">
                                    <i class="fas fa-wallet fa-stack-1x " style={{color:"#199719",fontSize:"2.5rem"}}></i>
                                </span>
                            </div>
                            <div className="box-con  d-flex align-items-center justify-content-center flex-column">
                                <h5 className='text'>Balance</h5>
                                <h5>₹0</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 d-flex align-item-center justify-content-center p-3">
                        <div className='box-inc rounded d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span class="fa-stack fa-2x ">
                                    <i class="fas fa-arrow-up fa-stack-1x  mx-3" style={{color:"#00aaff"}}></i>
                                    <i class="fas fa-coins" style={{color:"#00aaff"}}></i> 
                                </span>
                            </div>
                            <div className="box-con d-flex align-items-center justify-content-center flex-column">
                                <h5 className='text'>Income</h5>
                                <h5>₹0</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 d-flex align-item-center justify-content-center p-3">
                        <div className='box-exp rounded   d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span class="fa-stack fa-2x">

                                    <i class="fas fa-arrow-down fa-stack-1x  mx-3" style={{color:"#ff00008c"}}></i>
                                    <i class="fas fa-coins" style={{color:"#ff00008c"}}></i> 


                                </span>
                            </div>
                            <div className="box-con  d-flex align-items-center justify-content-center flex-column">
                                <h5 className='text'>Expense</h5>
                                <h5>₹0</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
