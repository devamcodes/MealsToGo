import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
