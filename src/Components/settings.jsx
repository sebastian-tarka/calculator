import React, { useState } from 'react';
import { THEMES } from './definition';


const Settings = ({ appRef, theme }) => {

    const [activeTheme, setActiveTheme] = useState(theme);

    const styles = {
        cursor: "pointer",
        margin: "0 10px"
    }

    const handleOnClick = event => {
        const selectedTheme = event.target.dataset.theme;
        appRef.current.className = `calc-app ${selectedTheme}`;
        setActiveTheme(selectedTheme);
    }

    const themesElements = THEMES.map(theme => {

        const isActive = activeTheme === theme.name ? true : false;
        const active = isActive ? {color:'orange'}:{};

        return (<span key={theme.name} style={styles}>
            <i style={active} data-theme={theme.name} onClick={handleOnClick} className={theme.icon}>
            </i></span>);
    });

    return (
        <div className="calc-settings">{themesElements}</div>
    )
}

export default Settings;