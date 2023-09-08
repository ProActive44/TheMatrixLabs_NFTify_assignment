import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import Styles from "../Styles/TopBar.module.css";
import Search from "../Images/Search.png";
import { searchData } from "../Redux/action";

const TopBar = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = ()=>{
     dispatch(searchData(search))
  }

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
          <input
            className={Styles.input}
            placeholder="Search"
            onChange={(e) => handleChange(e)}
          />
          <img src={Search} alt="search" onClick={handleSearch}/>
        </div>
      </div>
      <div>
        <button className={Styles.connectBtn}>Connect</button>
      </div>
    </div>
  );
};

export default TopBar;
