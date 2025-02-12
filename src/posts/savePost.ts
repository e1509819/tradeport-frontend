import { Product } from './types';

export async function savePost(newPostData: Product) {
  //const apiUrl =  'http://localhost:3016/submit';
  const apiUrl =  'http://localhost:3016/api/ProductManagement';
  try {
    newPostData.manufacturerId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    newPostData.shippingCost = 30;
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(newPostData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.json();
    
    return {...body};
  } catch (error) {
    console.error('Error in Connecting the endpoint:', error);
    return { error };
  }
}

