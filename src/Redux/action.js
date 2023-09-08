import axios from "axios";

export const getPairsData = (dispatch) => {
  axios(
    "https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae"
  )
    .then((res) => dispatch({ type: "PAIRS", payload: res.data.pairs }))
    .catch((error) => console.log(error));
};

export const getTokenData = (dispatch) => {
  axios(
    "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  )
    .then((res) => dispatch({ type: "TOKEN", payload: res.data.pairs }))
    .catch((error) => console.log(error));
};
