import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../Styles/Banner.css"
const Banner = () => {
    let Transactionresult = useSelector((state) => state.transactionData)

    const [bal, setBal] = useState(0)
    const [inc, setInc] = useState(0)
    const [exp, setExp] = useState(0)
    useEffect(() => {
        if (Transactionresult.length) {
            var bal = 0
            var inc = 0
            var exp = 0
            for (let i = 0; i < Transactionresult.length; i++) {
                if (Transactionresult[i].Type == "Income" || Transactionresult[i].Type == "Sale") {
                    // console.log(Transactionresult[i].data.Amount,Transactionresult[i].data.Type)
                    bal += parseInt(Transactionresult[i].Amount)
                    inc += parseInt(Transactionresult[i].Amount)
                }
                else if (Transactionresult[i].Type == "Expense" || Transactionresult[i].Type == "Purchase" || Transactionresult[i].Type == "Investment") {
                    // console.log(Transactionresult[i].data.Amount,Transactionresult[i].data.Type)
                    bal -= parseInt(Transactionresult[i].Amount)
                    exp += parseInt(Transactionresult[i].Amount)
                }
            }
            setBal(bal)
            setInc(inc)
            setExp(exp)
        }
    }, [Transactionresult.length])
    return (
        <>
            <div className="container banner mt-3">
                <div className="row  d-flex justify-content-md-between justify-content-around ">
                    <div className="col-md-3 m-md-0 my-2 box-bal  col-3  d-flex align-items-center   rounded">
                        <i class="icon fa-solid fa-wallet fa-2xl mr-3" style={{ color: "#199719" }}/>
                        <div >
                            <h5 className='box-text'>Balance</h5>
                            <h5 className='box-text'>₹{bal}</h5>
                        </div>
                    </div>
                    <div className=" col-md-3 m-md-0 my-2 box-inc  col-3 d-flex align-items-center rounded">
                    <i class="icon fa-solid fa-arrow-trend-up mr-3" style={{ color: "#00aaff"}}/>
                            <div>
                                <h5 className='box-text'>Income</h5>
                                <h5 className='box-text'>₹{inc}</h5>
                            </div>    
                    </div>
                    <div className=" col-md-3 m-md-0 my-2 box-exp col-3 d-flex align-items-center rounded">
                    <i class="icon fa-solid fa-arrow-trend-down mr-3" style={{ color: "red" }}/>
                            <div>
                                <h5 className='box-text'>Expense</h5>
                                <h5 className='box-text'>₹{exp}</h5>
                            </div>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
