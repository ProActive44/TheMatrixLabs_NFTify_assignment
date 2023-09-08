import '../Styles/LeftPanel.css'
import Vector from '../Images/Vector.png'
import logo from '../Images/NFTify.png'
import Token from '../Images/baseline-token.png'
import Pair from '../Images/fluent_pair.png'
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import twitter from '../Images/twitter.png'
import { useDispatch, useSelector } from 'react-redux';

const LeftPanel = () => {

    const dispatch = useDispatch();
    const active = useSelector((store)=>store.active)

    console.log(active)

    const changeActive = ()=>{
        active ? dispatch({type:'TRUE'}) : dispatch({type:'FALSE'})
    }

    return (
        <div className='container'>
            <div>
                <div className='flex'>
                    <img src={Vector} alt='vector'/>
                    <img src={logo} alt='NFTify'/>
                </div>
                <div className='options'>
                    <div className={active? 'ActiveOption' : 'option'} onClick={changeActive}>
                        <img src={Token} alt="token" />
                        <h3>Token Address</h3>
                    </div>
                    <div className={active? 'option' : 'ActiveOption'} onClick={changeActive}>
                        <img src={Pair} alt='fluent_pair'/>
                        <h3>Pair Address</h3>
                    </div>
                </div>
            </div>
            <div className='socialHandles'>
                <img src={facebook} alt='facebook'/>
                <img src={linkedin} alt='linkedin'/>
                <img src={twitter} alt='twitter'/>
            </div>
        </div>
    );
};

export default LeftPanel;