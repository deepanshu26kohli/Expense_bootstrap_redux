import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import HeaderModal from './Components/HeaderModal';
import AddTransaction from './Components/AddTransaction';
import TransHistory from './Components/TransHistory';
import {  Route, Routes } from 'react-router-dom';
import CheckAllTrans from './Components/CheckAllTrans';
import Detail from './Components/Detail'
import { useDispatch, useSelector } from 'react-redux';
import { addHeader } from './Redux/Action/HeaderAction';
import { addTransaction } from './Redux/Action/TransactionAction';
import Settings from './Components/Settings';

const App = () => {
  const [headerModal, setHeaderModal] = useState(null);
  const [showDetail,setShowDetail] = useState(false)
  return (
    <>
      <div className='container'>
        <Header/>
        <Banner/>
      <Routes> 
        <Route path="/" element={<div className="row mt-3 container justify-content-between">
              <div className="col-12 col-md-4 col-lg-3 h-50 d-flex flex-column justify-content-center align-items-center border rounded p-3">
                {  showDetail ? <Detail showDetail={showDetail} setShowDetail={setShowDetail}/> : <AddTransaction
                  headerModal={headerModal}
                  setHeaderModal={setHeaderModal}
                />}
              </div>
              <div className="col-12 col-md-8 col-lg-6 h-25 d-flex d-flex flex-column align-items-center border rounded py-3">
                <TransHistory showDetail={showDetail} setShowDetail={setShowDetail} />
                
              </div>
            </div>}/>
      
        <Route path="/alltransactions" element={<CheckAllTrans />} />
        <Route path = "/settings" element={<Settings/>}/>
        {/* <Route
          path="/"
          element={
            <div className="row mt-3 container justify-content-between">
              <div className="col-12 col-md-4 col-lg-3 h-50 d-flex flex-column justify-content-center align-items-center border rounded p-3">
                {  showDetail ? <Detail showDetail={showDetail} setShowDetail={setShowDetail}/> : <AddTransaction
                  headerModal={headerModal}
                  setHeaderModal={setHeaderModal}
                />}
              </div>
              <div className="col-12 col-md-8 col-lg-6 h-25 d-flex d-flex flex-column align-items-center border rounded py-3">
                <TransHistory showDetail={showDetail} setShowDetail={setShowDetail} />
                
              </div>
            </div>
          }
        /> */}
      </Routes>
      {headerModal && (
        <HeaderModal headerModal={headerModal} setHeaderModal={setHeaderModal} />
      )}
      </div>
    </>
  );
};

export default App;
