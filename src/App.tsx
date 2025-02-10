import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import  { ProductMaster } from './Product';
import { ThankYouPage } from './ThankYouPage';
import { savePost } from './posts/savePost';

import { Product } from './posts/types';

async function handleSave(product: Product) {
  const newPost = await savePost(product);
  console.log(newPost);
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="product" />,
  },
  {
    path: '/product',
    element: <ProductMaster onSave={handleSave}/>,
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