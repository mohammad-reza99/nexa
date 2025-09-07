import { useState } from "react";
import React from "react";
import Navbar from "./assets/componants/Navbar";
import Hero from "./assets/componants/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
