import React from "react";
import Styles from "../Styles/FourDivs.module.css";
import info from '../Images/info.png'
import doller from '../Images/dollar.png'
import token from '../Images/baseline-token.png'

const FourDivs = ({ data }) => {
  console.log(data);
  return (
    <div className={Styles.bigContainer}>
      <div className={Styles.smallContainer}>
        <h3>Basic Info</h3>
        <div className={Styles.flex}>
          <div>
            <p>Pair Created at</p>
            <p>{data.pairCreatedAt}</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>{data.baseToken.symbol}</p>
          </div>
          <div>
            <p>Dex ID</p>
            <p>{data.dexId}</p>
          </div>
          <div>
            <p>Pair Address</p>
            <p>{data.pairAddress}</p>
          </div>
        </div>
        <div className={Styles.circle}><img src={info}/></div>
      </div>
      <div className={Styles.smallContainer}>
        <h3>Base Token</h3>
        <div className={Styles.flex}>
          <div>
            <p>Name</p>
            <p>{data.baseToken.name}</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>{data.baseToken.symbol}</p>
          </div>
          <div>
            <p>Address</p>
            <p>{data.baseToken.address}</p>
          </div>
        </div>
        <div className={Styles.circle}><img src={token}/></div>
      </div>
      <div className={Styles.smallContainer}>
        <h3>Quote Token</h3>
        <div className={Styles.flex}>
          <div>
            <p>Name</p>
            <p>{data.quoteToken.name}</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>{data.quoteToken.symbol}</p>
          </div>
          <div>
            <p>Addres</p>
            <p>{data.quoteToken.address}</p>
          </div>
        </div>
        <div className={Styles.circle}><img src={token}/></div>
      </div>
      <div className={Styles.smallContainer}>
        <h3>Price</h3>
        <div className={Styles.flex}>
          <div>
            <p>Price Native</p>
            <p>{data.priceNative}</p>
          </div>
          <div>
            <p>Price USD</p>
            <p>{data.priceUsd}</p>
          </div>
        </div>
        <div className={Styles.circle}><img src={doller}/></div>
      </div>
    </div>
  );
};

export default FourDivs;
