import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import HeaderModal from './Components/HeaderModal'
import AddTransaction from './Components/AddTransaction'
import TransHistory from './Components/TransHistory'
const App = () => {
  const [headerModal, setHeaderModal] = useState(null)
  return (
    <>
      
      <div className="container  mt-5">
        <Header />
      <Banner />
        <div className="row justify-content-between ">
          <div className="col-12 col-md-4 col-lg-3 h-50 d-flex flex-column justify-content-center align-items-center border rounded p-3">
            <AddTransaction headerModal={headerModal} setHeaderModal={setHeaderModal} />
          </div>
          <div className="col-12 col-md-8 col-lg-6 h-25 d-flex d-flex flex-column  align-items-center border rounded py-3">
            <TransHistory />
          </div>
        </div>
      </div>
      {headerModal && <HeaderModal headerModal={headerModal} setHeaderModal={setHeaderModal} />}
    </>
  )
}

export default App
