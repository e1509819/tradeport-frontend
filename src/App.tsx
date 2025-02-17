import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductMaster } from "./pages/Product";
import { ThankYouPage } from "./pages/ThankYouPage";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductMaster />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
