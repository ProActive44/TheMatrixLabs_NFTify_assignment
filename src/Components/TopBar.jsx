import React from "react";
import Styles from "../Styles/TopBar.module.css";
import Search from '../Images/Search.png'

const TopBar = () => {
  return (
    <div className={Styles.container}>
      <div>
        <div
        //   style={{
        //     width: 435,
        //     height: 50,
        //     background:
        //       "linear-gradient(95deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%)",
        //     borderRadius: 20,
        //     border: "0.50px white solid",
        //   }}
        >
          <input className={Styles.input} placeholder="Search"/>
          <img src={Search} alt="search"/>
        </div>
      </div>
      <div>
        <button className={Styles.connectBtn}>Connect</button>
      </div>
    </div>
  );
};

export default TopBar;
