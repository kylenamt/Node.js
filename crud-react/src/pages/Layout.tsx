
import Sidebar from "../components/Sidebar";
import styles from "./styles.module.scss";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.mainPage}>
        <Navbar />
        <Outlet/>
      </div>
    </div>
    
    </>
  );
}
