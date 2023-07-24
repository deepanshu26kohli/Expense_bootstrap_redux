import React from 'react'
import "../Styles/Banner.css"
const Banner = () => {
    return (
        <>
            <div className="container banner ">
                <div className="row">
                    <div className="col d-flex align-item-center justify-content-center p-3 ">
                        <div className='rounded box-bal  d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span class="fa-stack fa-2x">
                                    <i class="fas fa-wallet fa-stack-2x"></i>
                                </span>
                            </div>
                            <div className="box-con  d-flex align-items-center justify-content-center flex-column">
                                <h4>My Balance</h4>
                                <h5>₹300</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-item-center justify-content-center p-3">
                        <div className='box-inc  d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span class="fa-stack fa-2x ">

                                    <i class="fas fa-wallet fa-stack-2x"></i>
                                    <i class="fas fa-wallet fa-stack-2x"></i>


                                </span>
                            </div>
                            <div className="box-con d-flex align-items-center justify-content-center flex-column">
                                <h4>My Income</h4>
                                <h5>₹300</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-item-center justify-content-center p-3">
                        <div className='box-exp   d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span class="fa-stack fa-2x">

                                    <i class="fas fa-wallet fa-stack-2x"></i>


                                </span>
                            </div>
                            <div className="box-con  d-flex align-items-center justify-content-center flex-column">
                                <h4>My Expense</h4>
                                <h5>₹300</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
