import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from "./styles.module.scss"
import Navbar from '../../components/Navbar'
import DashboardCard from '../../components/Dashboard'

function Dashboard() {
  return (
    <div className = {styles.wrapper}>
        <Sidebar/>
        <div className = {styles.mainPage}>
          <Navbar/>
          <DashboardCard/>
        </div>
    </div>
        
  )
}

export default Dashboard