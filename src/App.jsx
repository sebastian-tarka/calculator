import React, { createRef } from "react";

import "./App.css";
import Calculator from "./Components/calculator";
import AppContexProvider from "./store/AppStoreProvider";

function App() {

  return (
    <AppContexProvider>
      <h1>{process.env.REACT_APP_TITLE } {process.env.NODE_ENV}</h1>
      <div className="App">
        <Calculator />
      </div>
    </AppContexProvider>

  );
}

export default App;
