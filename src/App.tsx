import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductMaster } from "./pages/Product";
import { ThankYouPage } from "./pages/ThankYouPage";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductMaster />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
