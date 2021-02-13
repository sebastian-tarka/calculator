import React from 'react';
import {ACTION_TYPE} from './definition';


const Button = (props) => {

    const style = Boolean(props.item.style) ? props.item.style.dark : {};
    const iconCss = Boolean(props.item.iconCss) ? props.item.iconCss : null; 
    const buttonContent = iconCss ? <i data-value={props.item.text} className={iconCss}></i> :  props.item.text;

    if (props.item.type === ACTION_TYPE) {
        return (
            <button data-value={props.item.text} style={style} className="calc-action" onClick={props.handleOnClick}>
                {buttonContent}
            </button>
        );
    } else {
        return (
            <button data-value={props.item.text} style={style} onClick={props.handleOnClick}>
                {buttonContent}
            </button>
        );

    }
}

export default Button;