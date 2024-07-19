import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from "./styles.module.scss"
import Navbar from '../../components/Navbar'
import StudentTable from '../../components/StudentTable'
function Students() {
  return (
   <div className = {styles.wrapper}>
        <Sidebar/>
        <div className = {styles.mainPage}>
          <Navbar/>
          <StudentTable/>
        </div>
    </div>
  )
}
export default Students