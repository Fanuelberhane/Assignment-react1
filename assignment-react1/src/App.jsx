import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Enterprise from "./Enterprise";
import Feature from "./Feature";
import Home from "./Home";
import Support from "./Support";

function App() {
  return (
   <>
      <Header/>
     
      <main>
        <Home/>
        <Support/>
        <Feature/>
        <Enterprise/>
      </main>
      <Footer />
      </>
  );
}

export default App;