import { Product } from './types';

export async function getPosts(): Promise<Product[]> {
  const apiUrl = 'http://localhost:3016/ProductManagement';
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log('Data:', data);
  assertIsPosts(data);
  return data;
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