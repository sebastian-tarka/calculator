import React from 'react';


const KeyboardButton = ({ text, value, handleOnClick }) => {

    return (
        <button onClick={handleOnClick}>
            {text}
        </button>
    )
}

export default KeyboardButton;