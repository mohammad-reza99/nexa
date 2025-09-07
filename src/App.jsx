import { useState } from "react";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Show from "./assets/components/Show";
import Support from "./assets/components/Support";
import AllInOne from "./assets/components/AllInOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Show />
      <Support />
      <AllInOne />
    </>
  );
}

export default App;
