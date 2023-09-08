import React from 'react';
import { useSelector } from 'react-redux';
import FourDivs from './FourDivs';
import Styles from '../Styles/SearchResult.module.css'

const SearchResult = ({text}) => {

    const data = useSelector((store) => store.data);

    //   console.log(data)

    return (
        <div className={Styles.container}>
            <h2>{text}</h2>
            <div>
                {
                    data?.map((ele, idx)=>{
                        return(
                            <div key={idx}>
                               <FourDivs data={ele}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SearchResult;