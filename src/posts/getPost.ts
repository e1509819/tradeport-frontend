import { Product } from './types';

export async function getPosts(): Promise<Product[]> {
  const apiUrl = 'http://localhost:3016/api/ProductManagement';
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log('Data:', data.product);
  assertIsPosts(data.product);
  return data.product;
}

export function assertIsPosts(postsData: Product[]) {
  if (!Array.isArray(postsData)) {
    throw new Error("posts isn't an array");
  }
  if (postsData.length === 0) {
    return;
  }
 
  postsData.forEach(post => {
    if (!post.productID) {
      throw new Error("post is missing an id");
    }
  });
}