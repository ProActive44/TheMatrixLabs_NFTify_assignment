import React, { useEffect } from "react";
import Styles from "../Styles/Content.module.css";
import SearchResult from "../Components/SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { getPairsData, getTokenData } from "../Redux/action";

const Content = () => {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.active);


  useEffect(() => {
    active ? dispatch(getPairsData) : dispatch(getTokenData);
  }, [active]);

  return (
    <div className={Styles.container}>
      {active ? (
        <SearchResult text={"Token Search Results"}/>
      ) : (
        <SearchResult text={"Pair Search Results"} />
      )}
    </div>
  );
};

export default Content;
