import { Product } from './types';

export async function savePost(newPostData: Product) {
  const response = await fetch('http://localhost:3001/submissions/', {
    method: 'POST',
    body: JSON.stringify(newPostData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const body = (await response.json());
    //assertIsSavedPost(body);
  return { body };
}
/*
function assertIsSavedPost(post: any): asserts post is SavedPostData {
  if (!('id' in post)) {
    throw new Error("post doesn't contain id");
  }
  if (typeof post.id !== 'number') {
    throw new Error('id is not a number');
  }
}*/