import React, { useContext } from 'react';
import { AppContex } from '../store/AppStoreProvider';


const Screan = () => {
    const { score, summary} = useContext(AppContex);
    return (
        <div className="calc-screen">
          <div>{score}</div>
          <div className="summary">{summary}</div>
      </div>
    )
}

export default Screan;