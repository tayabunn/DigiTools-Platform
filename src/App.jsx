import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/page";
import Banner from "./components/Banner/page";
import DigitalTools from "./components/DigitalTools/page";
import Steps from "./components/Steps/page";
import Pricing from "./components/Pricing/page";
import Workflow from "./components/Workflow/page";
import Footer from "./components/Footer/page";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen">
      <ToastContainer position="top-right" autoClose={2500} theme="light" />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <DigitalTools cartItems={cartItems} setCartItems={setCartItems} />
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
