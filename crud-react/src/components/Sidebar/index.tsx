import React from "react";
import styles from "./styles.module.scss";
import {avt} from "../../assets/pictures/index"
import { sideBarIcons } from "../../assets/icons/sidebar";


function userInformationWindow(avatar: string, name: string, role: string) {
  return (
    <div className={styles.userInfo}>
      <div className={styles.pictureFrame}>
        <img
          className={styles.profilePicture}
          src={avatar}
          alt="profile_picture"
        />
      </div>
      <p className={styles.userName}>{name}</p>
      <p className={styles.userRole}>{role}</p>
    </div>
  );
}

function menuOption(optionName: string, location: string, iconSource: string) {
  return (
    <a className={styles.pageOptions} id={optionName} href={location}>
      <img src={iconSource} alt="" />
      <p>{optionName}</p>
    </a>
  );
}

function Sidebar() {
  const propUser1 = userInformationWindow(
    avt.avatar1,
    "Stan Edgar",
    "Admin"
  );
  const menuOptions = [
    ["Home"     , "", sideBarIcons.home],
    ["Course"   , "", sideBarIcons.bookmark],
    ["Students" , "", sideBarIcons.graduationcap],
    ["Payment"  , "", sideBarIcons.usd],
    ["Report"   , "", sideBarIcons.report],
    ["Setting"  , "", sideBarIcons.setting],
  ].map((option) => menuOption(option[0], option[1], option[2]));

  return (
      <div id={styles.sideBar}>
        <div className={styles.titleContainer}>
          <h1 className={styles.heading}>CRUD OPERATIONS</h1>
        </div>
        {propUser1}
        <div className={styles.pageMenu}>
          <div>{menuOptions}</div>
          <div>
            <a className={`${styles.pageOptions} ${styles.last}`} href="Signin.html">
              <p>Logout</p>
              <img src={sideBarIcons.logout} alt = "" />
            </a>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;
