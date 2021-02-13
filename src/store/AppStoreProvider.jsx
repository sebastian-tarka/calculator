import React, { createContext, useState } from 'react';


export const AppContex = createContext(null);

const AppContexProvider = ({ children }) => {

    const [score, setScore] = useState('0');
    const [summary, setSummary] = useState('');
    const [theme, setTheme] = useState('light');

    return (<AppContex.Provider value={
        {
            score,
            setScore,
            summary,
            setSummary,
            theme,
            setTheme
        }
    }>
        {children}
    </AppContex.Provider>);

}

export default AppContexProvider;

