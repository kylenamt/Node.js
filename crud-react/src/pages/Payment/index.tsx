import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from "./styles.module.scss"
import Navbar from '../../components/Navbar'
import PaymentTable from '../../components/PaymentTable'
function Payment() {
  return (
   <div className = {styles.wrapper}>
        <Sidebar/>
        <div className = {styles.mainPage}>
          <Navbar/>
          <PaymentTable/>
        </div>
    </div>
  )
}
export default Payment