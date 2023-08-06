import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import HeaderModal from './Components/HeaderModal';
import AddTransaction from './Components/AddTransaction';
import TransHistory from './Components/TransHistory';
import { Route, Routes } from 'react-router-dom';
import CheckAllTrans from './Components/CheckAllTrans';
import Detail from './Components/Detail'
import { useDispatch, useSelector } from 'react-redux';
import { fetchedHeaderData } from './Redux/Action/HeaderAction';
import { fetchTransactionData } from './Redux/Action/TransactionAction';
import { fetchBankData } from './Redux/Action/AddBankAction';
import Settings from './Components/Settings';
const App = () => {
  const dispatch = useDispatch()
  function myfxn() {
    dispatch(fetchedHeaderData())
    dispatch(fetchTransactionData())
    dispatch(fetchBankData())
  }
  if (localStorage.length === 0) {
    myfxn()
  }
  const [headerModal, setHeaderModal] = useState(null);
  const [showDetail, setShowDetail] = useState(false)
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<>
          <div className="container my-md-3 ">
            <TransHistory showDetail={showDetail} setShowDetail={setShowDetail} />
          </div>
          <div className="container my-3 ">
            {showDetail ? <Detail showDetail={showDetail} setShowDetail={setShowDetail} /> : <AddTransaction
              headerModal={headerModal}
              setHeaderModal={setHeaderModal}
            />}
          </div>
        </>} />

        <Route path="/alltransactions" element={<CheckAllTrans />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {headerModal && (
        <HeaderModal headerModal={headerModal} setHeaderModal={setHeaderModal} />
      )}
    </>

  );
};

export default App;
