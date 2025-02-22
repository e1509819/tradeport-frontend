import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProductMaster } from './Product';
import { ThankYouPage } from './ThankYouPage';
import { ProductDetail } from './ProductDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductMaster />} />
        <Route path="/productdetail/:productID" element={<ProductDetail />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;