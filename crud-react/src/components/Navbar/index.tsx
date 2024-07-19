import React from 'react'
import styles from './styles.module.scss'
import { navbarIcons } from '../../assets/icons/navbar'

function Navbar() {
  return (
    <div id = {styles.navBar}>
          <img
            id={styles.toggleMenu}
            src={navbarIcons.returnIcon}
            alt = ""
          />
          <div className = {styles.navBar_right}>
            <div className = {styles.textfield}>
              <input type="text" placeholder="Search..." />
              <img src= {navbarIcons.search} alt = "" />
            </div>
            <img src={navbarIcons.notification} alt = "" />
          </div>
        </div>
  )
}

export default Navbar