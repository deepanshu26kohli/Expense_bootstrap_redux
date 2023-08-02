import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../Styles/Banner.css"
const Banner = () => {
    let Transactionresult = useSelector((state) => state.transactionData)
    const [bal, setBal] = useState(0)
    const [inc, setInc] = useState(0)
    const [exp, setExp] = useState(0)
    useEffect(()=>{
        if (Transactionresult.length) {
            var bal = 0
            var inc = 0
            var exp = 0
            for (let i = 0; i < Transactionresult.length; i++) {
                if (Transactionresult[i].data.Type == "Income" || Transactionresult[i].data.Type == "Sale") {
                    console.log(Transactionresult[i].data.Amount,Transactionresult[i].data.Type)
                    bal += parseInt(Transactionresult[i].data.Amount)
                    inc += parseInt(Transactionresult[i].data.Amount)
                }
                else if(Transactionresult[i].data.Type == "Expense" || Transactionresult[i].data.Type == "Purchase" || Transactionresult[i].data.Type == "Investment" )   {
                    console.log(Transactionresult[i].data.Amount,Transactionresult[i].data.Type)
                    bal -= parseInt(Transactionresult[i].data.Amount)
                    exp += parseInt(Transactionresult[i].data.Amount)
                }
            }
            setBal(bal)
            setInc(inc)
            setExp(exp)
        }
    },[Transactionresult.length])
    return (
        <>
            <div className="container banner mt-2">
                <div className="row  ">
                    <div className="col-lg-4 col-md-4 col-12  d-flex align-item-center justify-content-center p-3 rounded">
                        <div className='rounded  box-bal  d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span className="fa-stack fa-2x">
                                    <i className="fas fa-wallet fa-stack-1x " style={{ color: "#199719", fontSize: "2.5rem" }}></i>
                                </span>
                            </div>
                            <div className="box-con  d-flex align-items-center justify-content-center flex-column">
                                <h5 className='text'>Balance</h5>
                                <h5>₹{bal}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 d-flex align-item-center justify-content-center p-3">
                        <div className='box-inc rounded d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span className="fa-stack fa-2x ">
                                    <i className="fas fa-arrow-up fa-stack-1x  mx-3" style={{ color: "#00aaff" }}></i>
                                    <i className="fas fa-coins" style={{ color: "#00aaff" }}></i>
                                </span>
                            </div>
                            <div className="box-con d-flex align-items-center justify-content-center flex-column">
                                <h5 className='text'>Income</h5>
                                <h5>₹{inc}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 d-flex align-item-center justify-content-center p-3">
                        <div className='box-exp rounded   d-flex flex-row align-items-center p-3'>
                            <div className="ic">
                                <span className="fa-stack fa-2x">
                                    <i className="fas fa-arrow-down fa-stack-1x  mx-3" style={{ color: "#ff00008c" }}></i>
                                    <i className="fas fa-coins" style={{ color: "#ff00008c" }}></i>
                                </span>
                            </div>
                            <div className="box-con  d-flex align-items-center justify-content-center flex-column">
                                <h5 className='text'>Expense</h5>
                                <h5>₹{exp}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
