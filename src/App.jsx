import React, { createRef } from "react";

import "./App.css";
import Calculator from "./Components/calculator";
import AppContexProvider from "./store/AppStoreProvider";

function App() {

  return (
    <AppContexProvider>
      <div className="App">
        <Calculator />
      </div>
    </AppContexProvider>

  );
}

export default App;
