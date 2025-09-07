import { useState } from "react";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Show from "./assets/components/Show";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Show />
    </>
  );
}

export default App;
