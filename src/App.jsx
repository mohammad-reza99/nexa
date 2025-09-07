import { useState } from "react";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Show from "./assets/components/Show";
import Support from "./assets/components/Support";
import AllInOne from "./assets/components/AllInOne";
import Pricing from "./assets/components/Pricing";
import Footer from "./assets/components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Show />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
