import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import  { ProductMaster } from './Product';
import { ThankYouPage } from './ThankYouPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="product" />,
  },
  {
    path: '/product',
    element: <ProductMaster />,
  },
  {
    path: '/thank-you',
    element: <ThankYouPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;