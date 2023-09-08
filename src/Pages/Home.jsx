import React from 'react';
import LeftPanel from '../Components/LeftPanel';
import Styles from  '../Styles/Home.module.css'
import TopBar from '../Components/TopBar';
import Content from './Content';

const Home = () => {
    return (
        <div className={Styles.container}>
            <LeftPanel/>
            <TopBar/>
            <Content/>
            <div className={Styles.laseLine}></div>
        </div>
    );
};

export default Home;