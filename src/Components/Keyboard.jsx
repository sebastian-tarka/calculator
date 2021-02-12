import React, { useContext } from 'react'
import { AppContex } from '../store/AppStoreProvider';
import Button from './button';

import definition, { ACTION_TYPE, CLEAN, CALCULATE, REMOVE, MORE } from './definition';

import './Keyboard.css';

const Keyboard = ({ moreRef, handleOnClickMore}) => {

    const { score, setScore, setSummary } = useContext(AppContex);

    const handleSetNumber = (event) => setValueInCalcScrean(event.target.dataset.value);

    const handleSetAction = event => {
        const value = event.target.dataset.value;
        const connector = '=';
        let calculation = null;

        try {
            switch (value) {
                case CLEAN:
                    setScore('0');
                    setSummary('');
                    break;
                case CALCULATE:
                    calculation = eval(score);
                    setScore(calculation);
                    setSummary(connector + calculation);
                    break;
                case REMOVE:
                    let undoValue = score.slice(0, -1);
                    setScore(undoValue);
                    break;
                case MORE:
                    handleOnClickMore();
                    break;
                default:
                    calculation = eval(score);
                    setValueInCalcScrean(value);
                    setSummary(connector + calculation);
                    break;
            }
        } catch (error) {
            console.log('expression');
        }


    }

    const setValueInCalcScrean = (value) => {
        if (Number(score) === 0) {
            setScore(value);
        } else {
            setScore(prev => prev + value);
        }
    }

    const buttons = definition.map(item => {

        let action = null;
        if (item.type === ACTION_TYPE) {
            action = handleSetAction;
        } else {
            action = handleSetNumber;
        }

        return <Button key={item.text} item={item} handleOnClick={action} />

    });

    return (
        <div className="calc-keyboard">
            {buttons}
        </div>
    )
}

export default Keyboard;