import React from "react";
import Styles from "../Styles/FourDivs.module.css";

const FourDivs = ({ data }) => {
  console.log(data);
  return (
    <div className={Styles.bigContainer}>
      <div className={Styles.smallContainer}>
        <h3>Basic Info</h3>
        <div className={Styles.flex}>
          <div>
            <p>Pair Created at</p>
            <p>Etherium</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>{data.baseToken.symbol}</p>
          </div>
          <div>
            <p>Dex ID</p>
            <p>#7890</p>
          </div>
          <div>
            <p>Pair Address</p>
            <p>#6754</p>
          </div>
        </div>
      </div>
      <div className={Styles.smallContainer}>
        <h3>Base Token</h3>
        <div className={Styles.flex}>
          <div>
            <p>Name</p>
            <p>Etherium</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>ETH</p>
          </div>
          <div>
            <p>Name</p>
            <p>#7890</p>
          </div>
        </div>
      </div>
      <div className={Styles.smallContainer}>
        <h3>Quote Token</h3>
        <div className={Styles.flex}>
          <div>
            <p>Name</p>
            <p>Etherium</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>ETH</p>
          </div>
          <div>
            <p>Addres</p>
            <p>#7890</p>
          </div>
        </div>
      </div>
      <div className={Styles.smallContainer}>
        <h3>Price</h3>
        <div className={Styles.flex}>
          <div>
            <p>Price Native</p>
            <p>ETH 7.00</p>
          </div>
          <div>
            <p>Price USD</p>
            <p>1.8m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourDivs;
