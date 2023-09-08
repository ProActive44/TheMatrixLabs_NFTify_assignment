import React from 'react';
import LeftPanel from '../Components/LeftPanel';
import Styles from  '../Styles/Home.module.css'

const Home = () => {
    return (
        <div className={Styles.container}>
            <LeftPanel/>
            
            <div className={Styles.laseLine}></div>
        </div>
    );
};

export default Home;