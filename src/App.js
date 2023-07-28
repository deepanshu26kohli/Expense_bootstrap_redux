import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Transaction from './Components/Transaction'
import HeaderModal from './Components/HeaderModal'
const App = () => {
  const [headerModal, setHeaderModal] = useState(null)
  // useEffect(()=>{
  //   if (headerModal){
  //      setHeaderModal(true)
  //   }   
  //   else{
  //     setHeaderModal(false)
  //   }
  // },[headerModal])
  return (
    <>
     <Header/>
     <Banner/>
     <Transaction  headerModal = {headerModal} setHeaderModal={setHeaderModal}/>
     {headerModal && <HeaderModal headerModal = {headerModal} setHeaderModal={setHeaderModal}/>}
    </>
  )
}

export default App
