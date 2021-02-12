import React, { createRef, useContext, useState } from 'react';
import { AppContex } from '../store/AppStoreProvider';
import Keyboard from './Keyboard';
import Screan from './Screan';
import Settings from './settings';

const Calculator = () => {

    const [isMoreShow, setIsMoreShow] = useState(false);
    const { theme } = useContext(AppContex);

    const calRef = createRef(null);
    const moreRef = createRef(null);

    const toggleMoreShow = () => setIsMoreShow(prev => !prev);

    return (
        <div ref={calRef} className={`calc-app ${theme}`}>

            <div ref={moreRef} className={`calc-options ${isMoreShow ? "show" : "hidden"}`} >
                <div><i class="fas fa-money-bill-alt"></i></div>
                <div><i class="fas fa-calculator"></i></div>
            </div>
            <div className="calc-content">
                <Settings appRef={calRef} theme={theme} />
                <Screan />
                <Keyboard moreRef={moreRef} handleOnClickMore={toggleMoreShow} />
            </div>
        </div>
    );
}

export default Calculator;