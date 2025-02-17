import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductMaster } from "./Product";
import { ThankYouPage } from "./ThankYouPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductMaster />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
