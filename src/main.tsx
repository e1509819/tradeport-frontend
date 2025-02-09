import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { savePost } from './posts/savePost';
import { ProductMaster } from './Product';
import { Product } from './posts/types';


//import reportWebVitals from './reportWebVitals';
async function handleSave(product: Product) {
  const newPost = await savePost(product);
  console.log(newPost);
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ProductMaster onSave = {handleSave} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
