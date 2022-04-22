import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Navbar from "./components/navigation/Navbar";
function App() {
  const links = [
    { id: 1, link: "Home", urlExt: "/" },
    { id: 2, link: "About", urlExt: "/blah" },
  ];
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar links={links} />
          <header className="App-header"></header>
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
